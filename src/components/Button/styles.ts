import styled from 'styled-components/native';
import {colors} from '../../flavor/fs22/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Button = styled.TouchableOpacity`
  width: ${wp(80)}px;
  height: ${hp(10)}px;
  margin: ${hp(2)}px ${wp(0)}px;
  background: ${colors.secondary};
  align-items: center;
  border: ${wp(0.8)}px;
  justify-content: center;
  border-top-right-radius: ${wp(1)}px;
  border-top-left-radius: ${wp(5.5)}px;
  border-bottom-left-radius: ${wp(1)}px;
  border-bottom-right-radius: ${wp(5.5)}px;
`;
export const Text = styled.Text`
  font-weight: bold;
  font-size: ${hp(4)}px;
  color: ${colors.text_light};
`;
