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
  flex: 0.29;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: ${hp(4.5)}px;
  color: ${colors.text_light};
`;

export const Body = styled.View`
  flex: 0.71;
  background-color: red;
  width: 100%;
`;

export const List = styled.View`
  background-color: blue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: ${wp(10)}px;
  padding-right: ${wp(10)}px;
`;

export const ImageBg = styled.ImageBackground`
  /* border-width: 1px;
  border-top-right-radius: ${wp(1)}px;
  border-top-left-radius: ${wp(5.5)}px;
  border-bottom-left-radius: ${wp(1)}px;
  border-bottom-right-radius: ${wp(5.5)}px; */
`;

export const styles = StyleSheet.create({
  btn: {
    marginLeft: 10,
    width: 80,
    height: 80,
  },
  btnImage: {width: 50, height: 50},
});
