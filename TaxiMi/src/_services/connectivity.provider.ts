import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConnectivityProvider {

  public appIsOnline$: Observable<boolean>;

  constructor() {

    this.initConnectivityMonitoring();

  }

  private initConnectivityMonitoring() {

    if (!window || !navigator || !('onLine' in navigator)) return;

    this.appIsOnline$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    ).pipe(map(() => navigator.onLine))

  }

}