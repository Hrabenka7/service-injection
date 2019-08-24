import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class logService {

  setToActive: number = 0;
  setToInactive: number = 0;

  logChangeActive() {
    this.setToActive ++
    console.log('Change Counter for active setting: ' + this.setToActive)
  }

  logChangeInactive() {
    this.setToInactive++
    console.log('Change Counter for inactive setting: ' + this.setToInactive)
  }
}