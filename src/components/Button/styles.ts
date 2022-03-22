import {useFlavor} from '../../flavor';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function useStyle() {
  const {colors} = useFlavor();

  const Button = styled.TouchableOpacity`
    width: ${wp(80)}px;
    height: ${hp(10)}px;
    align-items: center;
    justify-content: center;
    border-width: ${wp(0.8)}px;
    margin: ${hp(2)}px ${wp(0)}px;
    background: ${colors.secondary};
    border-top-right-radius: ${wp(1)}px;
    border-top-left-radius: ${wp(5.5)}px;
    border-bottom-left-radius: ${wp(1)}px;
    border-color: ${colors.border_buttons};
    border-bottom-right-radius: ${wp(5.5)}px;
  `;
  const Text = styled.Text`
    font-weight: bold;
    font-size: ${hp(4)}px;
    color: ${colors.text_light};
  `;
  return {Button, Text};
}
