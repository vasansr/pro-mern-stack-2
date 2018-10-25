let aboutMessage = "Issue Tracker API v1.0";

function setMessage(_, { message }) {
  return aboutMessage = message;
}

function getMessage() {
  return aboutMessage;
}

module.exports = { getMessage, setMessage };
