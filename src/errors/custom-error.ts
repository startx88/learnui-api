export abstract class CustomError extends Error {
  abstract status: number;

  // constructor
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract errorSerialize(): {
    message: string;
    status: number;
    field?: string;
  }[];
}
