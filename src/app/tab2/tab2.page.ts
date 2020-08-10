import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  isToggleBtnChecked: boolean;

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    of(1)
      .pipe(delay(400))
      .subscribe((val) => {
        console.log(val);
        this.isToggleBtnChecked = true;
      });
  }

  onToggleBtnChange(event): void {
    const isChecked = this.isToggleBtnChecked;
    console.log(isChecked);
    if (isChecked) {
      this.presentAlert();
    }
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      message: 'Message',
      buttons: ['Cancel', 'Accept'],
    });

    await alert.present();
  }
}
