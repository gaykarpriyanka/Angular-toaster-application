import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  message ='';
  title = '';
  showHTMLMessage(message, title){
    this.toastr.success(message, title, {
      enableHtml : true,
      timeOut: 7000,
      extendedTimeOut:7000,
      closeButton:true,
      progressBar:true
    })
  }
}
