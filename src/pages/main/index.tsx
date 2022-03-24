import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useNav} from '../../utils/hooks';
import {useLanguage} from '../../languages';
import Button from '../../components/Button';
import {version} from '../../../package.json';
import IconButton from '../../components/IconButton';

const Main: React.FC = () => {
  const {colors} = useFlavor();
  const {string} = useLanguage();
  const navigation = useNav('mainPage');

  return (
    <Styles.Container colors={colors}>
      <Styles.Header>
        <Styles.Title colors={colors}>{string.title}</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <Button
          onPress={() => {
            navigation.navigate('menuCrops');
          }}
          text={string.crops}
        />
        <Button onPress={() => {}} text={string.animals} />
        <Button onPress={() => {}} text={string.products} />
        <Styles.Version colors={colors}>{version}</Styles.Version>
      </Styles.Body>
      <Styles.Footer>
        <IconButton
          onPress={() => {
            navigation.navigate('language');
          }}
          icon={<Styles.IconII colors={colors} name="globe-sharp" />}
        />
        <IconButton
          onPress={() => {
            navigation.navigate('appearance');
          }}
          icon={<Styles.IconFA colors={colors} name="paint-brush" />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};

export default Main;
