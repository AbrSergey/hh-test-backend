class LoggerMongoError extends Error {
  constructor(message, status = 500){
    super(message);
    this.type = 'LoggerMongoError';
    this.status = status;
  }
}
  
module.exports = LoggerMongoError;