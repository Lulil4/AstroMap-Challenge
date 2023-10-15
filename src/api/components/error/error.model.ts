export class AstroError extends Error {
    constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, AstroError.prototype);
    }
  
    getMessage() {
      return 'Something went wrong: ' + this.message;
    }
  }