import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

// import * as $ from 'jquery';
import Modal from 'bootstrap/js/src/modal';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss']
})
export class BootstrapModalComponent implements OnInit {

  @Input('modalOptions') modalOptions;
  @ViewChild('modalTemplate') modalTemplate: ElementRef;
  modal: Modal;

  constructor() { }

  ngOnInit() {
    this.modal = new Modal(this.modalTemplate.nativeElement, this.modalOptions);
  }

  toggleModal() {
    this.modal.toggle();
  }

  showModal() {
    this.modal.show();
  }

  hideModal() {
    this.modal.hide();
  }

}
