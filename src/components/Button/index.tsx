import React from 'react';
import * as Styles from './styles';

interface ButtonProps {
  text: string;
  onPress: Function;
}

const Button: React.FC<ButtonProps> = ({text, onPress}) => {
  return (
    <Styles.Button
      onPress={() => {
        onPress();
      }}>
      <Styles.Text>{text}</Styles.Text>
    </Styles.Button>
  );
};

export default Button;
