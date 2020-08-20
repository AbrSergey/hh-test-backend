module.exports.get = async (req, res, next) => {
  try {
    const skillProgressData = [
      {
        name: 'Front-End Development',
        percent: '90%'
      },
      {
        name: 'Back-End Development',
        percent: '85%'
      },
      {
        name: 'Mobile App Development',
        percent: '75%'
      },
      {
        name: 'Desktop Development',
        percent: '80%'
      }
    ];

    const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur enim? Sit voluptas natus ut est rerum assumenda ratione asperiores voluptatibus molestias commodi incidunt inventore rem, perferendis consequatur? Ipsum, beatae.\n
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eligendi provident dolor delectus, nemo itaque facilis eveniet. Animi, id tenetur quos, nam doloremque similique, nulla dignissimos placeat optio ullam ipsam.`;
    
    res.status(200).json({
      skills: skillProgressData,
      text
    });
  } catch (err) {
    next(err);
  }
}