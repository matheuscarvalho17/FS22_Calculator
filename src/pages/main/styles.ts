import styled from 'styled-components/native';
import {IColorsProps} from '../../flavor/fs22/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
  flex: 0.25;
  justify-content: center;
`;
export const Body = styled.View`
  flex: 0.63;
`;
export const Footer = styled.View`
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
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const IconII = styled(Ionicons)`
  font-size: ${hp(4.5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const IconFA = styled(FontAwesome)`
  font-size: ${hp(4.5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
