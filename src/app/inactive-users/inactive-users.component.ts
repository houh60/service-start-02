import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

    inactiveUsers: string[] = [];
    constructor(
        private counterService: CounterService
    ) {}

    ngOnInit(): void {
        this.inactiveUsers = this.counterService.inactiveUsers;
    }

    setToActive(id: number) {
        this.counterService.setToActive(id);
    }
}
