module.exports.handler = async (event) => {
  // Your serverless function logic here
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from serverless!' }),
  };
};