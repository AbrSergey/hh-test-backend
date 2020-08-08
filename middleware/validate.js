const validation = (data, schema, options = { allowUnknown: true, abortEarly: false }) => {
  const { error } = schema.validate(data, options);

  if (error) {
    const details = error.details.map(value => value.message);
    throw new Error(details);
  } else 
    return true;
};

module.exports = component => (req, res, next) => {
  try {
    validation(req.body, component(req.body));
    next();
  } catch (err) {
    next(err);
  }
};