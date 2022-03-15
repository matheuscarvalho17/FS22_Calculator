import React from 'react';
import {useStyle} from './styles';
import {useNav} from '../../utils/hooks';
import {listOfFlavors} from '../../flavor';
import {useAppContext} from '../../Context';
import {useLanguage} from '../../languages';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Appearance: React.FC = () => {
  //Context
  const Styles = useStyle();
  // const {name} = useFlavor();
  const {styles} = useStyle();
  const {string} = useLanguage();
  const {SetFlavor} = useAppContext();
  //
  const navigation = useNav('language');
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{string.appearance}</Styles.Title>
      </Styles.Header>
      <Styles.ScrollBody showsVerticalScrollIndicator={false}>
        <Styles.List>
          {Object.keys(listOfFlavors).map((value, index) => (
            <Button
              key={index}
              text={listOfFlavors[value].flavor.name}
              onPress={() => {
                SetFlavor(listOfFlavors[value].flavor.key);
              }}
            />
          ))}
        </Styles.List>
      </Styles.ScrollBody>
      <Styles.Footer>
        <IconButton
          onPress={() => {
            navigation.goBack();
          }}
          icon={<Ionicons name="arrow-back" style={styles.icon} />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};

export default Appearance;
