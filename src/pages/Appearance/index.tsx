import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useNav} from '../../utils/hooks';
import {listOfFlavors} from '../../flavor';
import {useAppContext} from '../../Context';
import {useLanguage} from '../../languages';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';

//*  It is the Language page.
//*  This (page) allows users change the appearance based on the registered brands.

const Appearance: React.FC = () => {
  //* Flavor, Language, Context and Navigation hooks declaration
  const {colors} = useFlavor();
  const {string} = useLanguage();
  const {SetFlavor} = useAppContext();
  const navigation = useNav('language');

  return (
    <Styles.Container colors={colors}>
      <Styles.Header>
        <Styles.Title colors={colors}>{string.appearance}</Styles.Title>
      </Styles.Header>
      {/* //*  The Body contains the list of available brand colors. */}
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
      {/* //*  The Footer contains the button to go back to the previous page. */}
      <Styles.Footer>
        <IconButton
          onPress={() => {
            navigation.goBack();
          }}
          icon={<Styles.Icon colors={colors} name="arrow-back" />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};

export default Appearance;
