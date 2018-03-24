const fariHaraRoutes = require('./farihara_routes');

module.exports = function(app, db) {
	fariHaraRoutes(app, db);
}