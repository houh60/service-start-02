import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    @Input() account?: { name: string, status: string };
    @Input() id: number = 0;


    constructor(
        private loggingService: LoggingService,
        private accountService: AccountService
    ) {}

    ngOnInit(): void {
    }

    onSetTo(status: string) {
        this.accountService.updateStatus(this.id, status);
        // this.loggingService.logStatusChange(status);
        this.accountService.statusUpdated.emit(status);
    }

}
