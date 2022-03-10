import React from 'react';
import Routes from './src/routes';
import {colors} from './src/flavor';
import {AppRegistry} from 'react-native';
import {StatusBar} from 'react-native';
import {name as appName} from './app.json';

export default function MainIndex() {
  return (
    <>
      <StatusBar backgroundColor={colors.background} />
      <Routes />
    </>
  );
}

AppRegistry.registerComponent(appName, () => MainIndex);
