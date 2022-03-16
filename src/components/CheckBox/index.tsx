import React from 'react';
import {useStyle} from './styles';

interface CheckBoxProps {
  text: string;
  onPress: Function;
}

const CheckBox: React.FC<CheckBoxProps> = ({text, onPress}) => {
  const Styles = useStyle();

  return (
    <Styles.View>
      <Styles.Box
        onPress={() => {
          onPress();
        }}
      />
      <Styles.Label>{text}</Styles.Label>
    </Styles.View>
  );
};

export default CheckBox;
