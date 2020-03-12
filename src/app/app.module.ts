import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './../components/common/nav/nav.component';
import { HomeComponent } from './../components/pages/home/home.component';
import { CtaComponent } from './../components/common/cta/cta.component';
import { AboutComponent } from './../components/pages/home/about/about.component';
import { OurWorkComponent } from './../components/common/our-work/our-work.component';
import { WorkComponent } from './../components/pages/work/work.component';
import { ContactComponent } from './../components/pages/contact/contact.component';
import { JobsComponent } from './../components/pages/jobs/jobs.component';
import { ServicesComponent } from './../components/pages/services/services.component';
import { PageHeaderComponent } from './../components/common/page-header/page-header.component';
import { FooterComponent } from './../components/common/footer/footer.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatRippleModule } from '@angular/material/core';
import { NgwWowModule } from 'ngx-wow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CtaComponent,
    AboutComponent,
    OurWorkComponent,
    WorkComponent,
    ContactComponent,
    JobsComponent,
    ServicesComponent,
    PageHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatRippleModule,
    NgwWowModule,
    RouterModule.forRoot([            
      {
        path : '', 
        component: HomeComponent
      },
      {
        path: 'our-services', 
        component: ServicesComponent
      },       
      {
        path: 'our-work', 
        component: WorkComponent
      },
      {
        path: 'jobs', 
        component: JobsComponent
      },       
      {
        path: 'contact', 
        component: ContactComponent
      },      
    ]),
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
