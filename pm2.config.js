module.exports = {
  apps: [
    {
      name: "app",
      script: "./bin/www.ts",
      watch: true,
      ignore_watch: ["logs", "node_modules", "dist"],
      out_file: "logs/out.log",
      error_file: "logs/errr.log",
      interpreter: "./node_modules/.bin/ts-node",
      instances: 3,
      autorestart: true,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "prod",
        port: 8002,
      },
    },
  ],
};
