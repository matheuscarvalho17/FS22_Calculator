import React from 'react';
import {styles} from './styles';
import * as Styles from './styles';
import {string} from '../../languages';
import {useNav} from '../../utils/hooks';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const language = 'US';
export const apparence = 'FS22';

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
            icon={<Ionicons name="globe-sharp" style={styles.icon} />}
          />
          <IconButton
            onPress={() => {}}
            icon={<FontAwesome name="gear" style={styles.icon} />}
          />
        </Styles.BottomBox>
      </Styles.Body>
    </Styles.Container>
  );
};

export default Main;
