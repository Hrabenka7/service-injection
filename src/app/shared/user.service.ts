import { Injectable } from "@angular/core";
import { logService } from "./log.service";

 @Injectable()
 export class UserService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private logService: logService) {}

  setInactive(userId) {
    this.inactiveUsers.push(this.activeUsers[userId]);
    this.activeUsers.splice(userId, 1)
    this.logService.logChangeInactive()
  }

  setActive(userId) {
    this.activeUsers.push(this.inactiveUsers[userId]);
    this.inactiveUsers.splice(userId,1)
    this.logService.logChangeActive()
  }

 }
