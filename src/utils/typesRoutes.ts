import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  mainPage: undefined;
  menuCrops: undefined;
  crop: undefined;
};

export type navigationMainPageProps = NativeStackNavigationProp<
  RootStackParamList,
  'mainPage'
>;
export type navigationMenuCropsProps = NativeStackNavigationProp<
  RootStackParamList,
  'menuCrops'
>;
export type navigationCropProps = NativeStackNavigationProp<
  RootStackParamList,
  'crop'
>;
