/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  FingerprintJsProProvider
} from '@fingerprintjs/fingerprintjs-pro-react-native';

const WrappedApp = () => (
  <FingerprintJsProProvider
    apiKey={'X876qE3W4DAYxlqO7sE4'}
//    endpointUrl={'https://metrics.melissamoyerp.com'}
  >
    <App />
  </FingerprintJsProProvider>
);

AppRegistry.registerComponent(appName, () => WrappedApp);


//AppRegistry.registerComponent(
//  'AppName',
//  <FingerprintJsProProvider
//      apiKey={'X876qE3W4DAYxlqO7sE4'}
//  >
//    <App />
//  </FingerprintJsProProvider>
//);e


//AppRegistry.registerComponent(appName, () => App);
