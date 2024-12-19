import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
})
export class TrashPage implements OnInit {
  trashedItems = [
    { name: 'Document 1', type: 'PDF', icon: 'document' },
    { name: 'Image 1', type: 'JPG', icon: 'image' },
    { name: 'Video 1', type: 'MP4', icon: 'videocam' },
  ];

  constructor(private navCtrl: NavController) {}

  deletePermanently(item: any) {
    this.trashedItems = this.trashedItems.filter(i => i !== item);
    console.log(`${item.name} deleted permanently`);
  }

  restoreItem(item: any) {
    this.trashedItems = this.trashedItems.filter(i => i !== item);
    console.log(`${item.name} restored`);
  }

  goBackToTabs() {
    this.navCtrl.navigateBack('/tabs');
  }

  ngOnInit() {}
}
