const parseGraphQlBody = (body) => {
  const bodyObject = JSON.parse(body)
  if (!bodyObject.input) {
    throw new Error('Property "input" does not exist in request body.')
  }
  return bodyObject.input
}

const generateErrorObject = ({ statusCode, message }) => {
  return {
    statusCode,
    body: JSON.stringify({
      result: false,
      message
    })
  }
}

const generateSuccessObject = ({ statusCode, message, data, result }) => {
  if (!result) {
    result = true
  }
  return {
    statusCode,
    body: JSON.stringify({
      result,
      message,
      data
    })
  }
}

module.exports = {
  parseGraphQlBody,
  generateSuccessObject,
  generateErrorObject
}