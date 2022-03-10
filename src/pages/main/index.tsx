import React from 'react';
import * as Styles from './styles';
import {useNav} from '../../utils/hooks';
import {string} from '../../languages/US';
import Button from '../../components/Button';

const Main: React.FC = () => {
  const navigation = useNav('mainPage');
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Farming Calculator</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <Button
          onPress={() => {
            navigation.navigate('menuCrops');
          }}
          text={string.crops}
        />
        <Button
          onPress={() => {
            navigation.navigate('menuCrops');
          }}
          text={string.animals}
        />
        <Button
          onPress={() => {
            navigation.navigate('menuCrops');
          }}
          text={string.products}
        />
      </Styles.Body>
    </Styles.Container>
  );
};

export default Main;
