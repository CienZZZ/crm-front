// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseAPIKey: 'AIzaSyCsoYgnbTpo3N7f7_RObx-z0snwwuIuRRs ',
  firebaseDatabaseURL: 'https://crm-front-52411.firebaseio.com',
  appApi: {
    // baseUrl: 'http://localhost:3000'
    baseUrl: 'http://localhost:9090/api'
  },
  // socketConfig: {
  //   url: 'http://localhost:3000',
  //   opts: {
  //     transports: ['websocket']
  //   }
  // }  // TODO: sockety wylaczone
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
