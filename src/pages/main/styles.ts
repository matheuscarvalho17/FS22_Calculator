import styled from 'styled-components/native';
import {colors} from '../../flavor/johnDeere/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: ${colors.primary};
`;
export const Inside = styled.View`
  height: ${hp(5)}px;
  width: ${wp(30)}px;
  background: ${colors.secondary};
`;
export const Text = styled.Text`
  color: white;
  font-size: ${hp(4)}px;
`;
export const Button = styled.TouchableOpacity`
  background: white;
  height: ${hp(11)}px;
  width: ${wp(20)}px;
`;
