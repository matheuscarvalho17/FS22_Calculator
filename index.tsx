import Routes from './src/routes';
import {StatusBar} from 'react-native';
import {AppRegistry} from 'react-native';
import Logo from './src/assets/logo/logo';
import {name as appName} from './app.json';
import {Context} from './src/utils/Context';
import React, {useEffect, useState} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';

//*  It is the first page that is loaded when the application is launched.
//*  This (page) loads the main components in app: Splash screen, Context, Status Bar and redirects to Routes.

const MainIndex: React.FC = () => {
  //* useState declaration
  const [splash, setSplash] = useState<boolean>(false);

  //* useEffect's
  useEffect(() => {
    setTimeout(() => {
      setSplash(true);
    }, 1500);
  }, []);

  return (
    <AnimatedSplash
      isLoaded={splash}
      translucent={true}
      backgroundColor={'#2F414B'}
      customComponent={<Logo width={250} height={250} />}>
      <Context>
        <StatusBar hidden />
        <Routes />
      </Context>
    </AnimatedSplash>
  );
};

AppRegistry.registerComponent(appName, () => MainIndex);

export default MainIndex;
