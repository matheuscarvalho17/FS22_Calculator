import {useStyle} from './styles';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface CheckBoxProps {
  text: string;
  onPress: Function;
}

const CheckBox: React.FC<CheckBoxProps> = ({text, onPress}) => {
  const Styles = useStyle();
  const {styles} = useStyle();
  const [check, setCheck] = useState(false);

  function handleCheck() {
    setCheck(!check);
  }

  return (
    <Styles.View>
      <Styles.Box
        style={check ? styles.checked : styles.unchecked}
        onPress={() => {
          handleCheck();
          onPress();
        }}>
        {check && <FontAwesome name="check" style={styles.icon} />}
      </Styles.Box>
      <Styles.Label>{text}</Styles.Label>
    </Styles.View>
  );
};

export default CheckBox;
