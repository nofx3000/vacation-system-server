class BaseModel {
  errno: number;
  data: any;
  message!: any;
  constructor(errno: number, data: any, message: any) {
    this.errno = errno;
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

export class SuccessModel extends BaseModel {
  constructor(errno: number, data: any);
  constructor(data: any);
  constructor(errnoOrData: any, data: any = null) {
    if (typeof errnoOrData === "number") {
      super(errnoOrData, data, null);
    } else {
      super(0, errnoOrData, null);
    }
  }
}

export class ErrorModel extends BaseModel {
  constructor(errno: number, message: string);
  constructor(message: string);
  constructor(errnoOrMessage: number | string, message: string = "f") {
    if (typeof errnoOrMessage === "number") {
      super(errnoOrMessage, null, message);
    } else {
      super(10000, null, errnoOrMessage);
    }
  }
}
