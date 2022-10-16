import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';

@NgModule({
    declarations: [
        AppComponent,
        NewAccountComponent,
        AccountComponent,
        InactiveUsersComponent,
        ActiveUsersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [AccountService, LoggingService],
    bootstrap: [AppComponent]
})
export class AppModule {}
