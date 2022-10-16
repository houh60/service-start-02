import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    activeUsers = ['Max', 'Anna', 'John', 'Jack'];
    inactiveUsers = ['Eddie', 'Jammie', 'Chuck', 'William'];

    constructor() {}

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }
}
