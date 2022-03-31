import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {IColorsProps} from '../../flavor/fs22/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  padding: ${hp(5)}px ${wp(5)}px;
  background: ${(props: IColorsProps) => props.colors.background};
`;
export const Header = styled.View`
  flex: 0.15;
  flex-direction: row;
  align-items: center;
`;
export const LeftView = styled.View`
  flex: 0.75;
`;
export const RightView = styled.View`
  flex: 0.25;
`;
export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: ${hp(4.5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const Image = styled.Image`
  align-self: center;
  width: ${wp(15)}px;
  height: ${wp(15)}px;
  border-width: ${wp(0.8)}px;
  border-top-right-radius: ${wp(1)}px;
  border-top-left-radius: ${wp(5.5)}px;
  border-bottom-left-radius: ${wp(1)}px;
  border-bottom-right-radius: ${wp(5.5)}px;
  border-color: ${(props: IColorsProps) => props.colors.border_buttons};
`;
export const Body = styled.View`
  flex: 0.73;
`;
export const DivideView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TextInfos = styled.Text`
  font-weight: bold;
  font-size: ${hp(2.5)}px;
  margin-right: ${wp(2)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const TextInfosAccent = styled.Text`
  font-weight: bold;
  font-size: ${hp(3)}px;
  color: ${(props: IColorsProps) => props.colors.text_highlight};
`;
export const warnMessage = styled.Text`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${hp(1)}px;
  font-size: ${hp(3)}px;
`;
export const ScrollBody = styled.ScrollView`
  flex: 1;
`;
export const SectionTitle = styled.Text`
  padding-top: ${hp(1)}px;
  font-weight: bold;
  font-size: ${hp(2.7)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const Footer = styled.View`
  flex: 0.12;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
export const Icon = styled(Ionicons)`
  font-size: ${hp(4.5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;

export const styles = StyleSheet.create({
  margin5px: {
    marginLeft: wp(5),
  },
});
