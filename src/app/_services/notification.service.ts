import { Injectable } from '@angular/core';
  
// import { ToastrService } from 'ngx-toastr';
import { NzNotificationService } from 'ng-zorro-antd/notification';
  
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    constructor(private notification: NzNotificationService) { }

    showSuccess(message : string, title : string){
        //this.notification.success(message, title)
        this.notification.create('success',title,message);
    }

    showError(message : string, title : string){
        //this.notification.error(message, title)
        this.notification.create('error',title,message);
    }

    showInfo(message : string, title : string){
        //this.notification.info(message, title)
        this.notification.create('info',title,message);
    }

    showWarning(message : string, title : string){
        //this.notification.warning(message, title);
        this.notification.create('warning',title,message);
    }
}