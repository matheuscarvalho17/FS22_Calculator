import React from 'react';
import {useNav} from '../../utils/hooks';
import {Text, TouchableOpacity, View} from 'react-native';

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
