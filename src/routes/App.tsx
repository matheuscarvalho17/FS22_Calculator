import React from 'react';
import main from '../pages/main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import menuCrops from '../pages/menuCrops';
import crop from '../pages/crop';

const App = createNativeStackNavigator();
export const routeNames = {
  mainPage: 'main',
  menuCrops: 'menuCrops',
  crop: 'crop',
};
const app: React.FC = () => (
  <App.Navigator>
    <App.Screen name={routeNames.mainPage} component={main} />
    <App.Screen name={routeNames.menuCrops} component={menuCrops} />
    <App.Screen name={routeNames.crop} component={crop} />
  </App.Navigator>
);

export default app;
