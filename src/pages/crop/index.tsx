import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {navigationCropProps} from '../../utils/typesRoutes';
import {useNav} from '../../utils/hooks';

const Crop: React.FC = () => {
  const navigation = useNav('mainPage');
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('mainPage');
        }}>
        <Text>This is Crop Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Crop;
