import React from 'react';
import Main from '../pages/Main';
import Crop from '../pages/Crop';
import {useFlavor} from '../flavor';
import {StatusBar} from 'react-native';
import Language from '../pages/Language';
import MenuCrops from '../pages/MenuCrops';
import Appearance from '../pages/Appearance';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  mainPage: undefined;
  language: undefined;
  menuCrops: undefined;
  appearance: undefined;
  crop: {cropId: number};
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const App: React.FC = () => {
  const {colors} = useFlavor();

  return (
    <NavigationContainer>
      <StatusBar hidden={false} backgroundColor={colors.primary} />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="mainPage">
        <Stack.Screen name="crop" component={Crop} />
        <Stack.Screen name="mainPage" component={Main} />
        <Stack.Screen name="language" component={Language} />
        <Stack.Screen name="menuCrops" component={MenuCrops} />
        <Stack.Screen name="appearance" component={Appearance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
