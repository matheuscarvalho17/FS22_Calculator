import React from 'react';
import {useStyle} from './styles';
import {useNav} from '../../utils/hooks';
import {useAppContext} from '../../Context';
import Button from '../../components/Button';
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
      <Styles.Body>
        <Styles.Scroll showsVerticalScrollIndicator={false}>
          {Object.keys(listOfLanguages).map((value, index) => (
            <Button
              key={index}
              text={listOfLanguages[value].name}
              onPress={() => {
                SetLanguage(listOfLanguages[value].selectionName);
              }}
            />
          ))}
        </Styles.Scroll>
      </Styles.Body>
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
