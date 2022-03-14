import React from 'react';
import {useNav} from '../../utils/hooks';
import * as Styles from './styles';
import {FlatList, Image, ImageBackground, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {Text} from '../../components/Button/styles';
import {string} from '../../languages';

const MenuCrop: React.FC = () => {
  interface IButton {
    icon: any;
    onPress: Function;
  }
  const navigation = useNav('menuCrops');

  const buttons: Array<IButton> = [
    {icon: require('../../assets/crops/barley.png'), onPress: () => {}},
    {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
    {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
    {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
    {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
    {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
  ];
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Crops</Styles.Title>
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
