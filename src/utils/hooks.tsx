import {RootStackParamList} from './typesRoutes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function useNav(value: keyof RootStackParamList) {
  type param = NativeStackNavigationProp<RootStackParamList, typeof value>;
  const navigation = useNavigation<param>();
  return navigation;
}
