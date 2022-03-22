import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {IColorsProps} from '../../flavor/fs22/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const View = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const Box = styled.TouchableOpacity`
  width: ${wp(8)}px;
  height: ${wp(8)}px;
  align-items: center;
  justify-content: center;
  border-width: ${wp(0.8)}px;
  border-radius: ${wp(1.5)}px;
  border-color: ${(props: IColorsProps) => props.colors.border_buttons};
`;
export const Label = styled.Text`
  font-weight: bold;
  font-size: ${hp(2.5)}px;
  margin-left: ${wp(2)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;

export const styles = StyleSheet.create({
  icon: {
    fontSize: hp(3),
    // color: colors.text_light,
    color: 'white',
  },
  checked: {
    // backgroundColor: colors.secondary,
    backgroundColor: 'blue',
  },
  unchecked: {
    // backgroundColor: colors.checkbox_bg,
    backgroundColor: 'grey',
  },
});
