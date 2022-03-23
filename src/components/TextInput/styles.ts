import styled from 'styled-components/native';
import {IColorsProps} from '../../flavor/fs22/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const InputBox = styled.TextInput.attrs({
  placeholderTextColor: '#DDDDDD',
})`
  width: ${wp(80)}px;
  height: ${hp(8.5)}px;
  border-width: ${wp(0.8)}px;
  margin: ${hp(2)}px ${wp(0)}px;
  background: ${(props: IColorsProps) => props.colors.secondary};
  border-top-right-radius: ${wp(1)}px;
  border-top-left-radius: ${wp(5.5)}px;
  border-bottom-left-radius: ${wp(1)}px;
  border-color: ${(props: IColorsProps) => props.colors.border_buttons};
  border-bottom-right-radius: ${wp(5.5)}px;
  /* Text */
  font-weight: bold;
  font-size: ${hp(2.5)}px;
  padding-left: ${wp(5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
