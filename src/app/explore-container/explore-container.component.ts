import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  items = [
    { name: 'File1.jpg' },
    { name: 'Document.pdf' },
    { name: 'Presentation.pptx' }
  ];

  selectedItem: any = null;
  showConfirmModal: boolean = false;

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  // Function to clear all storage
  clearStorage() {
    this.presentAlert('Are you sure you want to clear all storage?', () => {
      this.items = [];  // This will clear the list
      console.log('Storage cleared');
    });
  }

  // Present confirmation modal before deleting an individual file
  // presentConfirm(item) {
  //   this.selectedItem = item;
  //   this.showConfirmModal = true;
  // }

  // Confirm delete action
  confirmDelete() {
    if (this.selectedItem) {
      this.items = this.items.filter(i => i !== this.selectedItem);
      this.dismissModal();
      console.log(`${this.selectedItem.name} deleted`);
    }
  }

  // Dismiss the confirmation modal
  dismissModal() {
    this.showConfirmModal = false;
    this.selectedItem = null;
  }

  // Helper function to present an alert
  async presentAlert(message: string, onConfirm: () => void) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            onConfirm();
          }
        }
      ]
    });

    await alert.present();
  }

  // Navigates to the Download tab/page
  openDownloadTab() {
    this.navCtrl.navigateForward('/download');
  }
}
