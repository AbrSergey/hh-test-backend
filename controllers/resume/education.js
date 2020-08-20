module.exports.get = async (req, res, next) => {
  try {
    const educationData = [
      {
        name: 'BS in Computer Science',
        place: 'unversity of awesomseness',
        period: '2006-2010'
      },
      {
        name: 'Certification in Machine Learning',
        place: 'institute of creativity',
        period: '2011-2012'
      },
      {
        name: 'Certification in Cyber Security',
        place: 'institute of awesomeness',
        period: '2013-2014'
      },
      {
        name: 'MS in Computer Science',
        place: 'unversity of awesomseness',
        period: '2010-2011'
      },
      {
        name: 'Certification in Data Analysis',
        place: 'institute of coolness',
        period: '2012-2013'
      },
      {
        name: 'Certification in Big Data',
        place: 'institute of coolness',
        period: '2014-2015'
      }
    ];
    
    res.status(200).json({
      count,
      data: educationData
    });
  } catch (err) {
    next(err);
  }
}