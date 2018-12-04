import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const countCart: Number = 0;
@Injectable({
  providedIn: 'root'
})
export class SyncService {

  private Msgsrc =  new BehaviorSubject(countCart);
  telecast = this.Msgsrc.asObservable();

  constructor() { }

  editMsg(newMsg) {
    this.Msgsrc.next(newMsg);
  }
}
