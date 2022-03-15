import React from 'react';
import {useStyle} from './styles';

interface ButtonProps {
  text: string;
  onPress: Function;
}

const Button: React.FC<ButtonProps> = ({text, onPress}) => {
  const Styles = useStyle();

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
