//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("../api/src/app.js");
const { conn } = require("../api/src/db.js");
//const chargeTempApiToDb = require('../api/src/routes/index')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  //chargeTempApiToDb()
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  }); /* .catch(err => console.error(err)); */
});
// Here the server is starting to listen in port 3001
