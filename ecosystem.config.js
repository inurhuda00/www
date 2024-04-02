module.exports = {
  apps: [
    {
      name: 'docs',
      exec_mode: 'cluster',
      instances: 1,
      autorestart: true,
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env_local: {
        APP_ENV: 'local' // APP_ENV=local
      },
      env_dev: {
        APP_ENV: 'dev' // APP_ENV=dev
      },
      env_prod: {
        APP_ENV: 'prod' // APP_ENV=prod
      }
    }
  ]
}
