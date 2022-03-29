import React from 'react';
import * as Styles from './styles';
import {useFlavor} from '../../flavor';

//*  It is the Button component.
//*  This (component) is used to render the 'Default Button' (with Text).

//* Button Interface
interface IButtonProps {
  text: string;
  onPress: Function;
}

const Button: React.FC<IButtonProps> = ({text, onPress}) => {
  //* Flavor hook declaration
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
