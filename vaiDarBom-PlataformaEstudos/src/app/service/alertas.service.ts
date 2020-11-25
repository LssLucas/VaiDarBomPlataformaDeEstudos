import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private bsModadalService: BsModalService) { }

  private showAlert(message: string, type: string) {
    const bsModadalRef: BsModalRef= this.bsModadalService.show(AlertasComponent)
    bsModadalRef.content.type = type
    bsModadalRef.content.message = message
  }

  showAlertDanger(message: string) {
    this.showAlert(message, 'danger')
  }

  showAlerSucess(message: string) {
    this.showAlert(message, 'sucess')
  }

  showAlertInfo(message: string) {
    this.showAlert(message, 'info')
  }

    showConfirm() {
      const bsModadalRef: BsModalRef= this.bsModadalService.show(ConfirmModalComponent)
    }

}
