import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';

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
        onPress={() => {
          setValue(!value);
          onPress();
        }}>
        {value && <Styles.Icon colors={colors} name="check" />}
      </Styles.Box>
      <Styles.Label colors={colors}>{text}</Styles.Label>
    </Styles.View>
  );
};

export default CheckBox;
