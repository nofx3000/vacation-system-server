class BaseModel {
  errno: number;
  data: any;
  message!: string;
  constructor(errno: number, data: any);
  constructor(errno: number, message: string);
  constructor(errno: number, payload: any) {
    this.errno = errno;
    if (typeof payload === "string") {
      this.message = payload;
    } else {
      this.data = payload;
    }
  }
}

export class SuccessModel extends BaseModel {
  constructor(errno: number, data: any);
  constructor(data: any);
  constructor(errnoOrData: any, data: any = null) {
    if (typeof errnoOrData === "number") {
      super(errnoOrData, data);
    } else {
      super(0, errnoOrData);
    }
  }
}

export class ErrorModel extends BaseModel {
  constructor(errno: number, message: string);
  constructor(message: string);
  constructor(errnoOrMessage: number | string, message: string = "f") {
    if (typeof errnoOrMessage === "number") {
      super(errnoOrMessage, message);
    } else {
      super(10000, errnoOrMessage);
    }
  }
}
