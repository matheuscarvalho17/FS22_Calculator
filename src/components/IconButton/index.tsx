import React from 'react';
import * as Styles from './styles';

interface ButtonProps {
  onPress: Function;
  icon?: React.ReactNode;
}

const IconButton: React.FC<ButtonProps> = ({onPress, icon}) => {
  return (
    <Styles.Button
      onPress={() => {
        onPress();
      }}>
      {icon}
    </Styles.Button>
  );
};

export default IconButton;
