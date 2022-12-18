/**
 * @param {integer} statusCode integer
 * @param {json} data data
 * @param {string} message string
 * @param {response} res response
 */
const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    payload: {
      statusCode: statusCode,
      datas: data,
      message: message,
    },
  });
};

export default response;
