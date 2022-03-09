import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {navigationMainPageProps} from '../../utils/typesRoutes';
import {useNav} from '../../utils/hooks';

const Main: React.FC = () => {
  const navigation = useNav('mainPage');
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
