import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {IColorsProps} from '../../flavor/fs22/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${hp(5)}px ${wp(5)}px;
  background: ${(props: IColorsProps) => props.colors.background};
`;
export const Header = styled.View`
  flex: 0.15;
  justify-content: center;
`;
export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: ${hp(4.5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const ButtonContent = styled.View`
  flex-direction: row;
`;
export const Flag = styled.Text`
  flex: 0.4;
  text-align: center;
  font-weight: bold;
  font-size: ${hp(4)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const Text = styled.Text`
  flex: 0.6;
  font-weight: bold;
  font-size: ${hp(4)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const ScrollBody = styled.ScrollView`
  flex: 0.73;
`;
export const List = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${hp(0)}px ${wp(5)}px;
`;
export const Footer = styled.View`
  flex: 0.12;
`;

export const styles = StyleSheet.create({
  icon: {
    fontSize: hp(4.5),
    // color: colors.text_light,
    color: 'white',
  },
});
