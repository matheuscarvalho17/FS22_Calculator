import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {ViewStyle} from 'react-native';

//*  It is the CheckBox component.
//*  This (component) allow users to select a boolean data.

//* CheckBox Interface
interface ICheckBoxProps {
  text: string;
  value: boolean;
  style?: ViewStyle;
  setValue: (value: boolean) => void;
}

const CheckBox: React.FC<ICheckBoxProps> = ({text, value, style, setValue}) => {
  //* Flavor hook declaration
  const {colors} = useFlavor();

  return (
    <Styles.View style={style}>
      <Styles.Box
        colors={colors}
        onPress={() => {
          setValue(!value);
        }}>
        {value && <Styles.Icon colors={colors} name="check" />}
      </Styles.Box>
      <Styles.Label colors={colors}>{text}</Styles.Label>
    </Styles.View>
  );
};

export default CheckBox;
