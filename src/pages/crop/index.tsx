import React from 'react';
import {useNav} from '../../utils/hooks';
import {Text, TouchableOpacity, View} from 'react-native';

const Crop: React.FC = () => {
  const navigation = useNav('crop');
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
