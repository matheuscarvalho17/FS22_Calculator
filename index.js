import React from 'react';
import Routes from './src/routes';
import {Context} from './src/Context';
import {StatusBar} from 'react-native';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

export default function MainIndex() {
  return (
    <Context>
      <StatusBar hidden />
      <Routes />
    </Context>
  );
}

AppRegistry.registerComponent(appName, () => MainIndex);
