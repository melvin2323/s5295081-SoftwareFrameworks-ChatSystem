import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { ChannelComponent } from './channel/channel.component';
import { RegisterComponent } from './register/register.component';
import { InMemoryDataService } from './in-memory-data.service'; 
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupManagementComponent,
    ChannelComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) // Add this line for mock backend
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
