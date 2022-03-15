import React from 'react';
import Routes from './src/routes';
import {colors} from './src/flavor';
import {AppRegistry} from 'react-native';
import {StatusBar} from 'react-native';
import {name as appName} from './app.json';
import {Context} from './src/Context';

export default function MainIndex() {
  return (
    <Context>
      {/* <StatusBar backgroundColor={colors.background} /> */}
      <Routes />
    </Context>
  );
}

AppRegistry.registerComponent(appName, () => MainIndex);
