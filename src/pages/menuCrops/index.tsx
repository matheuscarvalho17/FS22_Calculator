import {styles} from './styles';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {useNav} from '../../utils/hooks';
import {useLanguage} from '../../languages';
import {ImageURISource} from 'react-native';
import {useCrops} from '../../utils/database';
import React, {useEffect, useState} from 'react';
import IconButton from '../../components/IconButton';
import CustomButton from '../../components/CustomButton';

interface IButton {
  onPress: Function;
  icon: ImageURISource;
}

const MenuCrop: React.FC = () => {
  const crops = useCrops();
  const {colors} = useFlavor();
  const {string} = useLanguage();
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
    <Styles.Container colors={colors}>
      <Styles.Header>
        <Styles.Title colors={colors}>{string.crops}</Styles.Title>
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
          icon={<Styles.Icon colors={colors} name="arrow-back" />}
        />
      </Styles.Footer>
    </Styles.Container>
  );
};

export default MenuCrop;
