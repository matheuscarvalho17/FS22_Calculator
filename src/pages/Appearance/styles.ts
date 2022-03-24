import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
export const ScrollBody = styled.ScrollView`
  flex: 0.73;
`;
export const List = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${hp(0)}px ${wp(5)}px;
`;
export const Footer = styled.View`
  flex: 0.12;
`;
export const Icon = styled(Ionicons)`
  font-size: ${hp(4.5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
