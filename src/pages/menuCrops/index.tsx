import React from 'react';
import {useNav} from '../../utils/hooks';
import {Text, TouchableOpacity, View} from 'react-native';

const MenuCrop: React.FC = () => {
  const navigation = useNav('menuCrops');
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('crop');
        }}>
        <Text>This is Menu Crop Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuCrop;
