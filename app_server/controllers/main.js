/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'Skillsync'});
};

module.exports = {
index
};