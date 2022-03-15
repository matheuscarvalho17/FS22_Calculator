import React, {useEffect, useState} from 'react';
import {useNav} from '../../utils/hooks';
import * as Styles from './styles';
import {ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {Text} from '../../components/Button/styles';

import {useLanguage} from '../../languages';
import {useCrops} from '../../utils/database';

const MenuCrop: React.FC = () => {
  //context
  const {string} = useLanguage();
  const crops = useCrops();
  //
  interface IButton {
    icon: any;
    onPress: Function;
  }
  const navigation = useNav('menuCrops');

  const [buttons, setButtons] = useState<Array<IButton>>([
    // {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
  ]);

  useEffect(() => {
    let aux: Array<IButton> = [];
    console.log(crops);

    crops.forEach((element, i) => {
      aux.push({
        icon: element.icon,
        onPress: () => {
          navigation.navigate('crop', {cropid: i});
        },
      });
    });
    setButtons(aux);
  }, []);
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{string.crops}</Styles.Title>
      </Styles.Header>
      <Styles.Body>
        <ScrollView>
          <Styles.List>
            {buttons.map((v, i) => (
              <CustomButton
                onPress={v.onPress}
                style={{...Styles.styles.btn}}
                key={i}>
                <Styles.ImageBg
                  source={v.icon}
                  style={{...Styles.styles.btnImage}}></Styles.ImageBg>
              </CustomButton>
            ))}
          </Styles.List>
        </ScrollView>
      </Styles.Body>
    </Styles.Container>
  );
};

export default MenuCrop;
