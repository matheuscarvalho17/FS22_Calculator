import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {navigationMenuCropsProps} from '../../utils/typesRoutes';

const MenuCrop: React.FC = () => {
  const navigation = useNavigation<navigationMenuCropsProps>();
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
