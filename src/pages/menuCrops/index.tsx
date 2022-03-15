import React, {useEffect, useState} from 'react';
import {useNav} from '../../utils/hooks';
import * as Styles from './styles';
import {FlatList, Image, ImageBackground, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {Text} from '../../components/Button/styles';
import {string} from '../../languages';
import {crops} from '../../utils/database';

interface IButton {
  icon: any;
  onPress: Function;
}

const MenuCrop: React.FC = () => {
  const navigation = useNav('menuCrops');

  const [buttons, setButtons] = useState<Array<IButton>>([
    // {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
  ]);

  useEffect(() => {
    console.log('Aqui');
    let aux: Array<IButton> = [];
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
        <Styles.Title>Crops</Styles.Title>
      </Styles.Header>
      <Styles.Scroll showsVerticalScrollIndicator={false}>
        <Styles.Body>
          {buttons.map((value, key) => (
            <CustomButton
              key={key}
              onPress={value.onPress}
              style={{...styles.btn}}>
              <Styles.ImageBg
                source={value.icon}
                style={{...styles.btnImage}}
              />
            </CustomButton>
          ))}
        </Styles.Body>
      </Styles.Scroll>
      <Styles.BottomBox>
        <IconButton
          onPress={() => {
            navigation.goBack();
          }}
          icon={<Ionicons name="arrow-back" style={styles.icon} />}
        />
      </Styles.BottomBox>
    </Styles.Container>
  );
};

export default MenuCrop;
