import React from 'react';
import Main from '../pages/Main';
import Crop from '../pages/Crop';
import Language from '../pages/Language';
import MenuCrops from '../pages/MenuCrops';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  mainPage: undefined;
  language: undefined;
  menuCrops: undefined;
  crop: {cropId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="mainPage">
        <Stack.Screen name="crop" component={Crop} />
        <Stack.Screen name="mainPage" component={Main} />
        <Stack.Screen name="language" component={Language} />
        <Stack.Screen name="menuCrops" component={MenuCrops} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
