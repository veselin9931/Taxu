import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '_services';
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})


export class UserComponent implements OnInit{
    constructor(
        private alertService: AlertService,
        private accountService: AccountService) { }

        private userStatus;
    ngOnInit(){
        this.accountService.getAll().subscribe(data => {
           this.userStatus = data

           console.log(data);
          });
      
    }
}
