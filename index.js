import {AppRegistry, LogBox} from 'react-native'; 

import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
 
LogBox.ignoreLogs([
  'new NativeEventEmitter',
  'Non-serializable values were found in the navigation state',
]);

AppRegistry.registerComponent(appName, () => App);
