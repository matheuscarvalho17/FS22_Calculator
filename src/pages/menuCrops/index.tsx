import {styles} from './styles';
import * as Styles from './styles';
import {ImageURISource} from 'react-native';
import {useNav} from '../../utils/hooks';
import React, {useEffect, useState} from 'react';
import IconButton from '../../components/IconButton';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IButton {
  onPress: Function;
  icon: ImageURISource;
}

import {useLanguage} from '../../languages';
import {useCrops} from '../../utils/database';
const MenuCrop: React.FC = () => {
  //context
  const {string} = useLanguage();
  const crops = useCrops();
  const navigation = useNav('menuCrops');
  const [buttons, setButtons] = useState<Array<IButton>>([]);

  useEffect(() => {
    let aux: Array<IButton> = [];
    crops.forEach((element, id) => {
      aux.push({
        icon: element.icon,
        onPress: () => {
          navigation.navigate('crop', {cropId: id});
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
      <Styles.ScrollBody showsVerticalScrollIndicator={false}>
        <Styles.List>
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

export default MenuCrop;
