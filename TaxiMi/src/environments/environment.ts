// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
   production: false,
   //  apiUrl: 'https://taksito.azurewebsites.net',
   //  signalRUrl: 'https://taksito.azurewebsites.net',
     apiUrl: 'https://localhost:44377',
     signalRUrl: 'https://localhost:44377',
   // apiUrl: 'http://www.taximiapi.com.aspbg.net',
   // signalRUrl: 'http://www.taximiapi.com.aspbg.net',
   // apiUrl: 'http://192.168.0.4:3000',
   // signalRUrl: 'http://192.168.0.4:3000',

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
