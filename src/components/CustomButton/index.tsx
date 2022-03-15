import React from 'react';
import {useStyle} from './styles';
import {ViewStyle} from 'react-native';

interface ButtonProps {
  onPress: Function;
  style?: ViewStyle;
}

const CustomButton: React.FC<ButtonProps> = ({onPress, style, children}) => {
  const Styles = useStyle();

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
