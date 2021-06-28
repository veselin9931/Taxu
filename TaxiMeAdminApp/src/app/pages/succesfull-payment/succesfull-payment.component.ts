import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { AccountService } from '../../../_services';

@Component({
  selector: 'app-succesfull-payment',
  templateUrl: './succesfull-payment.component.html',
  styleUrls: ['./succesfull-payment.component.css']
})
export class SuccesfullPaymentComponent implements OnInit {

  public price = '0';

  constructor(private account: AccountService,
    private route: Router) { 

  }

  ngOnInit(): void {
    this.route.events
    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
      
    });
    let pr = localStorage.getItem("crypto");
    var toAtt = [...pr]
    this.price = `${toAtt[toAtt.length - 2]}${toAtt[toAtt.length - 1]}`

    this.account.charge(this.account.userValue.id, this.price).subscribe(() => { } );
    localStorage.removeItem("crypto");
  }

}
