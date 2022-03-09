import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {navigationMainPageProps} from '../../utils/typesRoutes';

const Main: React.FC = () => {
  const navigation = useNavigation<navigationMainPageProps>();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('menuCrops');
        }}>
        <Text>This is Main Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
