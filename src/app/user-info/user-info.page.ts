import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  user: any = {};
  constructor( private vansh : NavController) { }
  goToUserInfo(){
    this.vansh.navigateForward('/user-info'); // Navigates forward to the user-info
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.user = {
      name: 'Anish Kumar',
      email: 'Anish.kumar@lpu.com',
      phone: '+91-9876543210',
      address: 'Lovely Professional University Punjab, India',
      role: 'Student',
      joinedDate: '01-Jan-2023',
      profilePicture: 'assets/profile-picture.png', 
    };

}
}