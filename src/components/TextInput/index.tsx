import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {ViewStyle} from 'react-native';

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
  const {colors} = useFlavor();

  return (
    <Styles.InputBox
      colors={colors}
      value={value}
      onChangeText={text => setValue(text)}
      keyboardType={keyboard || 'default'}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default TextInput;
