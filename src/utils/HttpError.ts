class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message) // Call the parent class constructor with the message
    this.name = this.constructor.name // Set the name property
    Error.captureStackTrace(this, this.constructor) // Capture the stack trace
  }
}

export default HttpError
