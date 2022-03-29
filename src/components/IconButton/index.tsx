import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';

//*  It is the IconButton component.
//*  This (component) is used to render the 'Icon Button'.

//* Button Interface
interface IButtonProps {
  onPress: Function;
  icon?: React.ReactNode;
}

const IconButton: React.FC<IButtonProps> = ({icon, onPress}) => {
  //* Flavor hook declaration
  const {colors} = useFlavor();

  return (
    <Styles.Button
      colors={colors}
      onPress={() => {
        onPress();
      }}>
      {icon}
    </Styles.Button>
  );
};

export default IconButton;
