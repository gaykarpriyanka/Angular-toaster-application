import { Component, OnInit,ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";

import { Toast} from 'ngx-toastr'

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: [ './menu1.component.css' ]
})

export class Menu1Component {
  constructor(private toastr: ToastrService) {}
 
  showSuccess() {
    this.toastr.success('Welcome to our application.', 'Hi!', {
      timeOut: 7000,
      extendedTimeOut:7000,
      closeButton:true,
      progressBar:true
    });
  }
}

