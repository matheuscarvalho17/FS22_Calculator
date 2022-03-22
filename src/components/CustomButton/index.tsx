import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {ViewStyle} from 'react-native';

interface IButtonProps {
  style?: ViewStyle;
  onPress: Function;
}

const CustomButton: React.FC<IButtonProps> = ({style, onPress, children}) => {
  const {colors} = useFlavor();

  return (
    <Styles.Button
      colors={colors}
      onPress={() => {
        onPress();
      }}
      style={style}>
      {children}
    </Styles.Button>
  );
};

export default CustomButton;
