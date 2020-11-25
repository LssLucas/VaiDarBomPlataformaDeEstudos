import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  constructor(public modal: BsModalRef) { }

  ngOnInit() {
  }

  onClose() {
    this.modal.hide()
  }

  onConfirm() {
    this.modal.hide()
  }

}
