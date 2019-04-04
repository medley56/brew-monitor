export class AlertMessage {
  type: string;
  message: string;
  createdAt: number;

  constructor(type: string, message: string) {
    this.type = type;
    this.message = message;
    this.createdAt = Date.now();
  }
}
