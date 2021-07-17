class AuthError extends Error {
  statusCode;
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

export default AuthError;
