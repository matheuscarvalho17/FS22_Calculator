import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {routeNames} from '../../routes/App';

// import { Container } from './styles';
interface INavigation {
  navigation: StackNavigationProp<any, 'Main'>;
}
const main: React.FC<INavigation> = ({navigation}) => {
  // type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;
  // const navigation = useNavigation<>();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routeNames.menuCrops);
        }}>
        <Text>dasdasdasd main</Text>
      </TouchableOpacity>
    </View>
  );
};

export default main;
