import { NotificationService } from './../service/notification.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Toast} from 'ngx-toastr'

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: [ './menu2.component.css' ]
})

export class Menu2Component {
  constructor(private notifyService : NotificationService) {}


showHtmlToaster(msg){
	this.notifyService.showHTMLMessage(msg,"Thank you!")
}
}

