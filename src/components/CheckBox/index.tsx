import React from 'react';
import {useStyle} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface CheckBoxProps {
  value: boolean;
  text: string;
  onPress: Function;
  setValue: (value: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  text,
  value,
  onPress,
  setValue,
}) => {
  const Styles = useStyle();
  const {styles} = useStyle();

  return (
    <Styles.View>
      <Styles.Box
        style={value ? styles.checked : styles.unchecked}
        onPress={() => {
          setValue(!value);
          onPress();
        }}>
        {value && <FontAwesome name="check" style={styles.icon} />}
      </Styles.Box>
      <Styles.Label>{text}</Styles.Label>
    </Styles.View>
  );
};

export default CheckBox;
