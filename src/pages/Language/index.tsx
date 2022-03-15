import React from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import {Text} from '../../components/Button/styles';
import IconButton from '../../components/IconButton';
import {listOfLanguages, useLanguage} from '../../languages';
import * as Styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNav} from '../../utils/hooks';
import AsyncStorage from '@react-native-community/async-storage';
import {useAppContext} from '../../Context';
// import { Container } from './styles';

const Language: React.FC = () => {
  //Context
  const {language, SetLanguage} = useAppContext();
  const {string} = useLanguage();
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
                // console.log(listOfLanguages[value].name);
                SetLanguage(listOfLanguages[value].selectionName);
                // AsyncStorage.setItem(
                //   '@language',
                //   listOfLanguages[value].selectionName,
                // );
                // console.log(language);

                // updateLanguage();
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
          icon={<Ionicons name="arrow-back" style={Styles.styles.icon} />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};

export default Language;
