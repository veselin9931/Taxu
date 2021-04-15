import { Component, OnInit } from '@angular/core';
import { AccountService } from '_services';
import { SharedService } from '_services/shared-service/shared.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  walletAmount;

  constructor(private sharedSerice: SharedService,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.getWalletAmount();
  }

  getWalletAmount() {
    this.sharedSerice.getMyWallet(this.accountService.userValue.id)
      .subscribe(x => {
        if (x.ammount) {
          this.walletAmount = x.ammount;
        } else {
          this.walletAmount = 0;
        }
      })
  }
}
