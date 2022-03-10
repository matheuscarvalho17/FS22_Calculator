import React from 'react';
import * as Styles from './styles';
import {useNav} from '../../utils/hooks';
import {string} from '../../languages';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import { } from 'react-native-vector-icons';

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
        <Styles.BottomBox>
          <IconButton
            onPress={() => {}}
            // icon={<AntDesign name="smileo" />}
          />
          <IconButton
            onPress={() => {}}
            // icon={<AntDesign name="smileo" />}
          />
        </Styles.BottomBox>
      </Styles.Body>
    </Styles.Container>
  );
};

export default Main;
