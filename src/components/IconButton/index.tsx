import React from 'react';
import {useStyle} from './styles';

interface ButtonProps {
  onPress: Function;
  icon?: React.ReactNode;
}

const IconButton: React.FC<ButtonProps> = ({onPress, icon}) => {
  const Styles = useStyle();

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
