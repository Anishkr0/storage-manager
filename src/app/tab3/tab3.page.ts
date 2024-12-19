import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  showConfirmation = false;
  downloadHistory: { name: string; date: Date }[] = [];


  constructor(private comp: NavController) {}
  goToTab2() {
    this.comp.navigateBack(['/tabs/tab2']);  // Navigate to tab2
  }

  downloadFile() {
    
    // Show confirmation message
    this.showConfirmation = true;
 
    const newDownload = {
      name: ' PROJECT.PDF', // Replace with actual file name if available
      date: new Date()
    };
    this.downloadHistory.push(newDownload);

    setTimeout(() => {
      this.showConfirmation = false;
    }, 4000); // Message visible for 3 seconds
  }
}
