module.exports = {
  apps: [
    {
      name: 'shoppe-clone-api',
      script: 'dist/main.js',
      // cwd: __dirname, // path-to-project
      instances: 0,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
