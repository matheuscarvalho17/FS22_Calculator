import {colors} from '../../flavor';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${hp(5)}px ${wp(5)}px;
  background: ${colors.background};
`;
export const Header = styled.View`
  flex: 0.15;
  justify-content: center;
`;
export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: ${hp(4.5)}px;
  color: ${colors.text_light};
`;
export const ScrollBody = styled.ScrollView`
  flex: 0.73;
  width: 100%;
`;
export const Body = styled.View`
  flex: 1;
  display: flex;
  padding: ${hp(0)}px ${wp(5)}px;
  background: red;
`;
export const Image = styled.Image`
  align-self: center;
  width: ${wp(26)}px;
  height: ${hp(15)}px;
  border: ${wp(0.8)}px;
  border-top-right-radius: ${wp(1)}px;
  border-top-left-radius: ${wp(5.5)}px;
  border-bottom-left-radius: ${wp(1)}px;
  border-bottom-right-radius: ${wp(5.5)}px;
`;
export const TextInfos = styled.Text`
  font-weight: bold;
  font-size: ${hp(3.2)}px;
  color: ${colors.text_light};
`;
export const Footer = styled.View`
  flex: 0.12;
`;

export const styles = StyleSheet.create({
  icon: {
    fontSize: hp(4.5),
    color: colors.text_light,
  },
});
