exports.homeController = (req, res) => {
  res.send(`<h1>I am Home Route</h1>`);
};

exports.aboutController = (req, res) => {
  res.send(`<h1>I am About Route</h1>`);
};

exports.helpController = (req, res) => {
  res.send(`<h1>I am Help Route</h1>`);
};
