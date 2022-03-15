import React from 'react';
import {useStyle} from './styles';
import {useNav} from '../../utils/hooks';
import {useAppContext} from '../../Context';
import Button from '../../components/CustomButton';
import IconButton from '../../components/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {listOfLanguages, useLanguage} from '../../languages';

const Language: React.FC = () => {
  //Context
  const Styles = useStyle();
  const {styles} = useStyle();
  const {string} = useLanguage();
  const {SetLanguage} = useAppContext();
  //
  const navigation = useNav('language');
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{string.language}</Styles.Title>
      </Styles.Header>
      <Styles.ScrollBody showsVerticalScrollIndicator={false}>
        <Styles.List>
          {Object.keys(listOfLanguages).map((value, index) => (
            <Button
              key={index}
              onPress={() => {
                SetLanguage(listOfLanguages[value].language.key);
              }}>
              <Styles.ButtonContent>
                <Styles.Flag>
                  {listOfLanguages[value].language.flag}
                </Styles.Flag>
                <Styles.Text>
                  {listOfLanguages[value].language.name}
                </Styles.Text>
              </Styles.ButtonContent>
            </Button>
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

export default Language;
