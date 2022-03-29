import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {ViewStyle} from 'react-native';

//*  It is the TextInput component.
//*  This (component) allow users entry data.

//* Button Interface
interface IButtonProps {
  value: string;
  style?: ViewStyle;
  setValue: Function;
  placeholder: string;
  keyboard?: 'numeric' | 'number-pad' | 'email-address';
}

const TextInput: React.FC<IButtonProps> = ({
  style,
  value,
  setValue,
  keyboard,
  placeholder,
}) => {
  //* Flavor hook declaration
  const {colors} = useFlavor();

  return (
    <Styles.InputBox
      value={value}
      style={style}
      colors={colors}
      placeholder={placeholder}
      keyboardType={keyboard || 'default'}
      onChangeText={text => setValue(text)}
    />
  );
};

export default TextInput;
