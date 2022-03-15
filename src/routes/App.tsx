import React from 'react';
import Main from '../pages/Main';
import Crop from '../pages/Crop';
import MenuCrops from '../pages/MenuCrops';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Language from '../pages/Language';
export type RootStackParamList = {
  crop: {cropid: number};
  mainPage: undefined;
  menuCrops: undefined;
  language: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="mainPage">
        <Stack.Screen name="mainPage" component={Main} />
        <Stack.Screen name="menuCrops" component={MenuCrops} />
        <Stack.Screen name="crop" component={Crop} />
        <Stack.Screen name="language" component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
