import { Component, ViewChild } from '@angular/core';
import { BootstrapModalComponent } from './components/bootstrap-modal/bootstrap-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalOptions = {};
  @ViewChild(BootstrapModalComponent) bootstrapModalComponent: BootstrapModalComponent;

  constructor() {}

  toggleModal() {
    this.bootstrapModalComponent.toggleModal();
  }

  showModal() {
    this.bootstrapModalComponent.showModal();
  }

  hideModal() {
    this.bootstrapModalComponent.hideModal();
  }
}
