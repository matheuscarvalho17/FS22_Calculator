import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useNav} from '../../utils/hooks';
import {useAppContext} from '../../Context';
import Button from '../../components/CustomButton';
import IconButton from '../../components/IconButton';
import {listOfLanguages, useLanguage} from '../../languages';

//*  It is the Language page.
//*  This (page) allows users change the language based on the available languages.

const Language: React.FC = () => {
  //* Flavor, Language, Context and Navigation hooks declaration
  const {colors} = useFlavor();
  const {string} = useLanguage();
  const {SetLanguage} = useAppContext();
  const navigation = useNav('language');

  return (
    <Styles.Container colors={colors}>
      <Styles.Header>
        <Styles.Title colors={colors}>{string.language}</Styles.Title>
      </Styles.Header>
      {/* //*  The Body contains the list of available languages. */}
      <Styles.ScrollBody showsVerticalScrollIndicator={false}>
        <Styles.List>
          {Object.keys(listOfLanguages).map((value, index) => (
            <Button
              key={index}
              onPress={() => {
                SetLanguage(listOfLanguages[value].language.key);
              }}>
              <Styles.ButtonContent>
                <Styles.Flag colors={colors}>
                  {listOfLanguages[value].language.flag}
                </Styles.Flag>
                <Styles.Text colors={colors}>
                  {listOfLanguages[value].language.name}
                </Styles.Text>
              </Styles.ButtonContent>
            </Button>
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

export default Language;
