import {useFlavor} from '../../flavor';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function useStyle() {
  const {colors} = useFlavor();

  const View = styled.View`
    align-items: center;
    flex-direction: row;
  `;
  const Box = styled.TouchableOpacity`
    width: ${wp(8)}px;
    height: ${wp(8)}px;
    align-items: center;
    justify-content: center;
    border-width: ${wp(0.8)}px;
    border-radius: ${wp(1.5)}px;
    border-color: ${colors.border_buttons};
  `;
  const Label = styled.Text`
    font-weight: bold;
    font-size: ${hp(2.5)}px;
    margin-left: ${wp(2)}px;
    color: ${colors.text_light};
  `;

  const styles = StyleSheet.create({
    icon: {
      fontSize: hp(3),
      color: colors.text_light,
    },
    checked: {
      backgroundColor: colors.secondary,
    },
    unchecked: {
      backgroundColor: colors.checkbox_bg,
    },
  });
  return {Box, Label, View, styles};
}
