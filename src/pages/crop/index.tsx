import React from 'react';
import {useNav} from '../../utils/hooks';
import {Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import * as Styles from './styles';
import {crops} from '../../utils/database';

const Crop: React.FC = ({}) => {
  const navigation = useNav('crop');
  const route = useRoute();
  const {cropid} = route.params;
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{crops[cropid].name}</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <Styles.TextInfos>Price</Styles.TextInfos>
      </Styles.Body>
    </Styles.Container>
  );
};

export default Crop;
