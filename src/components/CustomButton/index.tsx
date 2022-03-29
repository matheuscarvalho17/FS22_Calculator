import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';
import {ViewStyle} from 'react-native';

//*  It is the CustomButton component.
//*  This (component) is used to render the 'Custom Button' (with children).

//* Button Interface
interface IButtonProps {
  style?: ViewStyle;
  onPress: Function;
}

const CustomButton: React.FC<IButtonProps> = ({style, onPress, children}) => {
  //* Flavor hook declaration
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
