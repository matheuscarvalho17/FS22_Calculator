import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {RootStackParamList} from './typesRoutes';

export function useNav(value: keyof RootStackParamList) {
  type tipo = NativeStackNavigationProp<RootStackParamList, typeof value>;
  const navigation = useNavigation<tipo>();
  useEffect(() => {}, []);

  return navigation;
}
