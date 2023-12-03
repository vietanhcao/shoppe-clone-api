import { Injectable, mixin, NestInterceptor, Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';

interface LocalFilesInterceptorOptions {
  fieldName: string;
  path?: string;
  fileFilter?: MulterOptions['fileFilter'];
  limits?: MulterOptions['limits'];
}

function LocalFilesInterceptor(
  options: LocalFilesInterceptorOptions,
): Type<NestInterceptor> {
  @Injectable()
  class Interceptor implements NestInterceptor {
    fileInterceptor: NestInterceptor;
    constructor(private readonly configService: ConfigService) {
      const filesDestination = configService.get('UPLOADED_FILES_DESTINATION');

      const destination = `${filesDestination}${options.path}`;

      function getFileExtension(originalName: string): string {
        const lastPeriodIndex = originalName.lastIndexOf('.');

        // Check if a period was found and it's not the last character in the string
        if (
          lastPeriodIndex !== -1 &&
          lastPeriodIndex < originalName.length - 1
        ) {
          return originalName.slice(lastPeriodIndex + 1);
        }

        // If no valid extension found, you might want to handle this case accordingly
        return '';
      }

      const multerOptions: MulterOptions = {
        storage: diskStorage({
          destination,
          filename: function (req, file, cb) {
            const extension = getFileExtension(file.originalname);
            cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
          },
        }),
        fileFilter: options.fileFilter,
        limits: options.limits,
      };
      this.fileInterceptor = new (FileInterceptor(
        options.fieldName,
        multerOptions,
      ))();
    }

    intercept(...args: Parameters<NestInterceptor['intercept']>) {
      return this.fileInterceptor.intercept(...args);
    }
  }

  return mixin(Interceptor);
}

export default LocalFilesInterceptor;
