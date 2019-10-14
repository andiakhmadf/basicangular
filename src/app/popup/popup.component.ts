import { Component } from '@angular/core';

@Component({
  selector: 'kendo-grid-form',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  public dialogOpened = false;

    public close(component) {
      this[component + 'Opened'] = false;
    }

    public open(component) {
      this[component + 'Opened'] = true;
    }

    public action(status) {
      console.log(`Dialog result: ${status}`);
      this.dialogOpened = false;
    }

}
