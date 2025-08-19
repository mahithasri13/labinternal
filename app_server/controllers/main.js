/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'smart_travel_planner'});
};

module.exports = {
index
};