import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

    activeUsers: string[] = [];
    constructor(
        private counterService: CounterService
    ) {}

    ngOnInit(): void {
        this.activeUsers = this.counterService.activeUsers;
    }

    setToInactive(id: number) {
        this.counterService.setToInactive(id);
    }

}
