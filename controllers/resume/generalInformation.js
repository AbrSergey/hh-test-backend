module.exports.get = async (req, res, next) => {
  try {
    const informationData = [
      {
        name: 'Age',
        value: '25'
      },
      {
        name: 'Address',
        value: '1234 Street, W3 Island'
      },
      {
        name: 'Email',
        value: 'contact@domain.com'
      },
      {
        name: 'Phone',
        value: '+0123 456 789'
      },
      {
        name: 'Website',
        value: 'http://www.envato.com'
      }
    ];

    const name = 'Jonh Doe';
    const position = 'Software Engineer & Coffee Addict';
    
    res.status(200).json({
      data: informationData,
      name,
      position
    });
  } catch (err) {
    next(err);
  }
}