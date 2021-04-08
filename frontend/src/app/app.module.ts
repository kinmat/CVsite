import { WorkExpService } from './services/work-exp.service';
import { PersonalInfoService } from './services/personal-info.service';
import { UserDataService } from './services/user-data-service.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { DynamicComponent } from './components/dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CarouselComponent,
    NavibarComponent,
    HeaderComponent,
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
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
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
    ])
  ],
  providers: [UserDataService, PersonalInfoService, WorkExpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
