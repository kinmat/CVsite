import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { PersonalInfo } from 'src/app/model/personal-info';
import { User } from 'src/app/model/user';
import { PersonalInfoService } from 'src/app/services/personal-info.service';
import { UserDataService } from 'src/app/services/user-data-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cv-form-first',
  templateUrl: './cv-form-first.component.html',
  styleUrls: ['./cv-form-first.component.css'],
})
export class CvFormFirstComponent {
  model: NgbDateStruct;
  user: User;
  newUser: User;
  allUsers: User[];
  personal: PersonalInfo;
  countryList: string[];

  constructor(private userService: UserDataService,private personalService: PersonalInfoService, private route: ActivatedRoute,
    private router: Router) {
    this.countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    this.user = new User();
    this.newUser = new User();
    this.personal = new PersonalInfo();
    this.userService.findAll().subscribe(data => {
      this.allUsers = data;
    });
  }
  
  select(model) {
    console.log(model);
  }
  
  onSubmit() {
    this.addUser();
  }

  addUser() {
    this.personal.birthdate= new Date(this.model.year, this.model.month-1, this.model.day, 0, 0, 0, 0);
      console.log(this.personal);
      console.log(this.user);
    this.userService.addUser(this.user).subscribe(data => {
      this.newUser = data;
      this.userService.changeLoggedInUser(this.user);
      this.addPersonal();
    }); 
  }

  addPersonal() {
    console.log(this.newUser);
    this.personal.userId = this.newUser.id;
    this.personalService.addPersonalInfo(this.personal).subscribe();  
    this.router.navigate(['/fill-form/work']);   
  }
}
