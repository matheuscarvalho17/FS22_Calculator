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
export const ScrollBody = styled.ScrollView`
  flex: 0.73;
  width: 100%;
`;
export const Body = styled.View`
  flex: 1;
  display: flex;
  padding: ${hp(1.5)}px ${wp(5)}px;
`;
export const Image = styled.Image`
  align-self: center;
  width: ${wp(20)}px;
  height: ${wp(20)}px;
  border-width: ${wp(0.8)}px;
  margin-bottom: ${hp(1.5)}px;
  border-top-right-radius: ${wp(1)}px;
  border-top-left-radius: ${wp(5.5)}px;
  border-bottom-left-radius: ${wp(1)}px;
  border-bottom-right-radius: ${wp(5.5)}px;
  border-color: ${(props: IColorsProps) => props.colors.border_buttons};
`;
export const TextInfos = styled.Text`
  font-weight: bold;
  font-size: ${hp(2.5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const BoxList = styled.View`
  height: ${hp(60)}px;
  justify-content: space-around;
`;
export const InputList = styled.View`
  flex-direction: row;
`;
export const LeftView = styled.View`
  flex: 0.75;
  justify-content: center;
`;
export const RightView = styled.View`
  flex: 0.25;
  align-items: flex-end;
  justify-content: center;
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
  width95: {
    width: '95%',
  },
});
