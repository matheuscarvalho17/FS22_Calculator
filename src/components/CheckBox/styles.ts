import styled from 'styled-components/native';
import {IColorsProps} from '../../flavor/fs22/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const View = styled.View`
  align-items: center;
  flex-direction: row;
  margin: ${hp(1)}px ${wp(0)}px;
`;
export const Box = styled.TouchableOpacity`
  width: ${wp(8)}px;
  height: ${wp(8)}px;
  align-items: center;
  justify-content: center;
  border-width: ${wp(0.8)}px;
  border-radius: ${wp(1.5)}px;
  background: ${(props: IColorsProps) => props.colors.checkbox_bg};
  border-color: ${(props: IColorsProps) => props.colors.border_buttons};
`;
export const Label = styled.Text`
  font-weight: bold;
  font-size: ${hp(2.5)}px;
  margin-left: ${wp(2)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const Icon = styled(FontAwesome)`
  font-size: ${hp(3)}px;
  padding: ${wp(0.65)}px;
  border-radius: ${wp(0.65)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
  background: ${(props: IColorsProps) => props.colors.secondary};
`;
