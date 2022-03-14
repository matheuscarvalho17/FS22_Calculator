import React from 'react';
import {styles} from './styles';
import * as Styles from './styles';
import {useNav} from '../../utils/hooks';
import IconButton from '../../components/IconButton';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IButton {
  icon: any;
  onPress: Function;
}

const MenuCrop: React.FC = () => {
  const navigation = useNav('menuCrops');
  const buttons: Array<IButton> = [
    {icon: require('../../assets/crops/barley.png'), onPress: () => {}},
    {icon: require('../../assets/crops/olives.png'), onPress: () => {}},
    {icon: require('../../assets/crops/cotton.png'), onPress: () => {}},
    {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
    {icon: require('../../assets/crops/grapes.png'), onPress: () => {}},
    {icon: require('../../assets/crops/grass.png'), onPress: () => {}},
    {icon: require('../../assets/crops/barley.png'), onPress: () => {}},
    {icon: require('../../assets/crops/olives.png'), onPress: () => {}},
    {icon: require('../../assets/crops/cotton.png'), onPress: () => {}},
    {icon: require('../../assets/crops/wheat.png'), onPress: () => {}},
    {icon: require('../../assets/crops/grapes.png'), onPress: () => {}},
    {icon: require('../../assets/crops/grass.png'), onPress: () => {}},
  ];
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Crops</Styles.Title>
      </Styles.Header>
      <Styles.Scroll>
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
