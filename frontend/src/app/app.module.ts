import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EducationService } from 'src/app/services/education.service';
import { SkillLangService } from './services/skill-lang.service';
import { WorkExpService } from './services/work-exp.service';
import { PersonalInfoService } from './services/personal-info.service';
import { UserDataService } from './services/user-data-service.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './components/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavibarComponent } from './components/navibar/navibar.component';
import { HeaderComponent } from './components/header/header.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ExportOptionsComponent } from './components/export-options/export-options.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CvFormFirstComponent } from './components/cv-form-first/cv-form-first.component';
import { CvFormWorkComponent } from './components/cv-form-work/cv-form-work.component';
import { CvFormEducationComponent } from './components/cv-form-education/cv-form-education.component';
import { CvFormSkillsComponent } from './components/cv-form-skills/cv-form-skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { UserComponent } from './customSite/user/user.component';
import { UserDetailComponent } from './customSite/user-detail/user-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    AppComponent,
    CarouselComponent,
    NavibarComponent,
    RegisterComponent,
    NavibarComponent,
    LoginComponent,
    UserListComponent,
    ProfileComponent,
    CvFormFirstComponent,
    CvFormWorkComponent,
    CvFormEducationComponent,
    CvFormSkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    UserComponent,
    UserDetailComponent,
    TemplatesComponent,
    ExportOptionsComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxBootstrapSliderModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    NgbProgressbarModule,
    RouterModule.forRoot([
    { 
      path: '', 
      component: HomeComponent,
      children: [
        { path: '', component: CarouselComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'templates', component: TemplatesComponent },
        { path: 'export-options', component: ExportOptionsComponent },
        { path: 'users', component: UserListComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'fill-form/work', component: CvFormWorkComponent },
        { path: 'fill-form/education', component: CvFormEducationComponent },
        { path: 'fill-form/skills', component: CvFormSkillsComponent },
        { path: 'fill-form', component: CvFormFirstComponent },
      ]
  },
  
      { path: 'user', component: UserComponent},
      { path: 'user/:id', component: UserDetailComponent },
  
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserDataService, PersonalInfoService, WorkExpService, SkillLangService, EducationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
