module.exports = async (err, req, res, next) => {
  try {
    console.log(err);
    
    res.status(500).json({
      error: err.type || 'Server error',
      description: err.message,
      stack: err.stack
    });
  } catch(err){
    console.log(err);
  }
};