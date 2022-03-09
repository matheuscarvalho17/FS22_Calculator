/**
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Routes from './src/routes';

export default function Main() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
