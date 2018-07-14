import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentfetcherComponent } from './components/contentfetcher/contentfetcher.component';
import { RendererComponent } from './components/renderer/renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentfetcherComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      component: DashboardComponent
    }
    // ,{
    //   path: 'login',
    //   component: loginComponent
    // },
    // {
    //   path: 'signup',
    //   component: loginComponent
    // },{
    //   path: 'dashboard',
    //   component: DashboardComponent
    // }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
