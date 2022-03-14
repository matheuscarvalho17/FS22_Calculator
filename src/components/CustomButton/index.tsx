import React from 'react';
import {ViewStyle} from 'react-native';
import * as Styles from './styles';

interface ButtonProps {
  onPress: Function;
  style?: ViewStyle;
}

const CustomButton: React.FC<ButtonProps> = ({onPress, style, children}) => {
  return (
    <Styles.Button
      onPress={() => {
        onPress();
      }}
      style={style}>
      {children}
    </Styles.Button>
  );
};

export default CustomButton;
