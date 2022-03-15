import React from 'react';
import {useStyle} from './styles';
import {useNav} from '../../utils/hooks';
import {useLanguage} from '../../languages';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Main: React.FC = () => {
  const Styles = useStyle();
  const {styles} = useStyle();
  const {string} = useLanguage();
  const navigation = useNav('mainPage');

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{string.title}</Styles.Title>
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
      <Styles.Footer>
        <IconButton
          onPress={() => {
            navigation.navigate('language');
          }}
          icon={<Ionicons name="globe-sharp" style={styles.icon} />}
        />
        <IconButton
          onPress={() => {}}
          icon={<FontAwesome name="paint-brush" style={styles.icon} />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};

export default Main;
