import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';

interface IButtonProps {
  text: string;
  onPress: Function;
}

const Button: React.FC<IButtonProps> = ({text, onPress}) => {
  const {colors} = useFlavor();

  return (
    <Styles.Button
      colors={colors}
      onPress={() => {
        onPress();
      }}>
      <Styles.Text colors={colors}>{text}</Styles.Text>
    </Styles.Button>
  );
};

export default Button;
