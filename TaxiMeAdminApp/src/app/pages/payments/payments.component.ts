import { Component, OnInit } from '@angular/core';
import { AccountService } from '_services';
import { SharedService } from '_services/shared-service/shared.service';
import { v4 as uuidv4 } from 'uuid';

if (!("TextEncoder" in window))
  alert("Sorry, this browser does not support TextEncoder...");


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  walletAmount;



  constructor(private sharedSerice: SharedService,
    private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.getWalletAmount();
  }

  getWalletAmount() {
    this.sharedSerice.getMyWallet(this.accountService.userValue.id)
      .subscribe(x => {
        console.log(x)
        if (x.ammount) {
          this.walletAmount = x.ammount;
        } else {
          this.walletAmount = 0;
        }
      })
  }

  crypto(str) {
    let myuuid = uuidv4();
    let a = [...myuuid];
    a.push(str);
    console.log(a);
    localStorage.setItem("crypto", a.join(""));
  }
}
