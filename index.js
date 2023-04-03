/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// native에 App 등록
AppRegistry.registerComponent(appName, () => App);