import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';

interface IButtonProps {
  onPress: Function;
  icon?: React.ReactNode;
}

const IconButton: React.FC<IButtonProps> = ({icon, onPress}) => {
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
