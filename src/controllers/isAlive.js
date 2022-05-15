const check = require('axios');

/**
 * Function to check if the server is alive and if themeparks' API is up
 * @param req
 * @param res
 * @returns Status code 200 if the server is alive and the API is up
 * @returns Status code 500 if the server is alive but the API is down
 */
exports.isAlive = function (req, res) {
  console.log('Checking if the server is alive...');
  check.get('https://api.themeparks.wiki/v1')
  .then((response) => {
    if (response.data.version === 1) {
      res.status(200).send({
        status: 'ok',
        message: 'API of themeparks.wiki is up and running',
        data: response.data,
      });
    } else {
      res.status(500).send({
        status: 'error',
        message: 'API of themeparks.wiki is not running',
        data: response.data,
      });
    }
  });
};