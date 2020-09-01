import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // messages: string[] = [];
  constructor(private message: NzMessageService) {}
  createBasicMessage(a: string): void {
    this.message.info(a);
  }

  // add(message: string) {
  //   this.messages.push(message);
  //   setTimeout(() => {
  //     this.clear();
  //   }, 1000);
  // }

  // clear() {
  //   this.messages = [];
  // }
}
