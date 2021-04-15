import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services';
import { WalletService } from '../../_services/wallet/wallet.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
    walletAmount: number;
    user = this.accountService.userValue;

    constructor(private accountService: AccountService, private walletService: WalletService) { }

    ngOnInit() {
        this.getWalletAmount();
  }



    getWalletAmount() {
        this.walletService.getMyWallet(this.user.id)
            .subscribe(x => {
                if (x.ammount) {
                    this.walletAmount = x.ammount;
                } else {
                    this.walletAmount = 0;
                }
            })
    }
}
