import React from 'react';
import {styles} from './styles';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ICheckBoxProps {
  text: string;
  value: boolean;
  onPress: Function;
  setValue: (value: boolean) => void;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  text,
  value,
  onPress,
  setValue,
}) => {
  const {colors} = useFlavor();

  return (
    <Styles.View>
      <Styles.Box
        colors={colors}
        style={value ? styles.checked : styles.unchecked}
        onPress={() => {
          setValue(!value);
          onPress();
        }}>
        {value && <FontAwesome name="check" style={styles.icon} />}
      </Styles.Box>
      <Styles.Label colors={colors}>{text}</Styles.Label>
    </Styles.View>
  );
};

export default CheckBox;
