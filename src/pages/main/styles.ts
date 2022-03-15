import {colors} from '../../flavor';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${hp(5)}px ${wp(5)}px;
  background: ${colors.background};
`;
export const Header = styled.View`
  flex: 0.25;
  justify-content: center;
`;
export const Body = styled.View`
  flex: 0.63;
`;
export const BottomBox = styled.View`
  flex: 0.12;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: ${hp(4.5)}px;
  color: ${colors.text_light};
`;

export const styles = StyleSheet.create({
  icon: {
    color: colors.text_light,
    fontSize: hp(4.5),
  },
});
