import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isSearchVisible: boolean = false;
  searchTerm: string = '';
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  onSearchChange(event: any) {
    const query = event.detail.value;
    console.log('Search query: ', query);
    // You can add your search logic here
  }


  constructor(private ansh: NavController) {}
  goBackToTabs() {
    this.ansh.navigateBack('/tabs'); // Navigates back to the tabs page
  }
  goToUserInfo() {
    this.ansh.navigateForward('/user-info'); // Navigate to the User Info Page
  }
  
 

}
