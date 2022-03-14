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
export const Scroll = styled.ScrollView`
  flex: 0.7;
`;
export const Body = styled.View`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: ${hp(0)}px ${wp(5)}px;
`;
export const BottomBox = styled.View`
  flex: 0.15;
`;

export const ImageBg = styled.ImageBackground``;

export const styles = StyleSheet.create({
  btn: {
    width: wp(20),
    height: hp(12),
    marginLeft: wp(2),
    marginRight: wp(2),
  },
  btnImage: {
    width: wp(16),
    height: hp(9),
  },
  icon: {
    fontSize: hp(4.5),
    color: colors.text_light,
  },
});
