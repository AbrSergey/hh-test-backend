module.exports.get = async (req, res, next) => {
  try {
    const socialLinkData = [
      {
        href: 'https://www.facebook.com/',
        iconClass: 'fa-facebook-f'
      },
      {
        href: 'https://www.twitter.com/',
        iconClass: 'fa-twitter'
      },
      {
        href: 'https://www.google.com/',
        iconClass: 'fa-google'
      },
      {
        href: 'https://www.linkedin.com/',
        iconClass: 'fa-linkedin-in'
      },
      {
        href: 'https://www.github.com/',
        iconClass: 'fa-github'
      },
      {
        href: 'https://www.skype.com/',
        iconClass: 'fa-skype'
      }
    ];
    
    res.status(200).json({
      count: socialLinkData.length,
      data: socialLinkData
    });
  } catch (err) {
    next(err);
  }
}