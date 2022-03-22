import React from 'react';
import {useStyle} from './styles';
import {ViewStyle} from 'react-native';

interface ButtonProps {
  value: string;
  style?: ViewStyle;
  setValue: Function;
  placeholder: string;
  keyboard?: 'numeric' | 'number-pad' | 'email-address';
}

const TextInput: React.FC<ButtonProps> = ({
  style,
  value,
  setValue,
  keyboard,
  placeholder,
}) => {
  const Styles = useStyle();

  return (
    <Styles.InputBox
      value={value}
      onChangeText={text => setValue(text)}
      keyboardType={keyboard || 'default'}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default TextInput;
