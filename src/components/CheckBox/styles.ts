import {useFlavor} from '../../flavor';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function useStyle() {
  const {colors} = useFlavor();

  const View = styled.View`
    /* background: grey; */
    align-items: center;
    flex-direction: row;
  `;
  const Box = styled.TouchableOpacity`
    width: ${wp(8)}px;
    height: ${wp(8)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${wp(1.5)}px;
    border-width: ${wp(0.8)}px;
    background: ${colors.checkbox_bg};
    border-color: ${colors.border_buttons};
  `;
  const Label = styled.Text`
    font-weight: bold;
    font-size: ${hp(2.5)}px;
    margin-left: ${wp(2)}px;
    color: ${colors.text_light};
  `;
  return {Box, Label, View};
}
