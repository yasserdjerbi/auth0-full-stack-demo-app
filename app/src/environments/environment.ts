// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DOMAIN, FE_CLIENT_ID, AUDIENCE } from '../../../auth.conf.json';
import * as process from 'process';

export const environment = {
	production: false,
	domain: DOMAIN || process.env.DOMAIN,
	clientId: FE_CLIENT_ID || process.env.FE_CLIENT_ID,
	audience: AUDIENCE || process.env.AUDIENCE,
	productsPath: '/api/products'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

