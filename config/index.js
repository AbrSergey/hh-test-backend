const fs = require('fs');

const appConfig = {
  app: {
    port: 8080
  },
  db: {
    url: process.env.DB_URL
  }
};

for (let type in appConfig)
  for (let prop in appConfig[type]){
    if (!appConfig[type][prop]) throw new Error(`Environment variable error: ${type} -> ${prop} undefined`);
  }

module.exports = appConfig;