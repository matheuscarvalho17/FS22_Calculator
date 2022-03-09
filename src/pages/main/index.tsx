import React from 'react';
import * as Styles from './styles';
import {useNav} from '../../utils/hooks';

const Main: React.FC = () => {
  const navigation = useNav('mainPage');
  return (
    <Styles.Container>
      <Styles.Inside />
      <Styles.Text>Main Page</Styles.Text>
      <Styles.Button
        onPress={() => {
          navigation.navigate('menuCrops');
        }}
      />
    </Styles.Container>
  );
};

export default Main;
