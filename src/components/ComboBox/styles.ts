import styled from 'styled-components/native';
import {Button as IBox} from '../Button/styles';
import {IColorsProps} from '../../flavor/fs22/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Box = styled(IBox)`
  flex-direction: row;
  height: ${hp(8.5)}px;
  margin: ${hp(1)}px ${wp(0)}px;
`;
export const LabelView = styled.View`
  flex: 0.85;
`;
export const IconView = styled.View`
  flex: 0.15;
  align-items: center;
`;
export const Label = styled.Text`
  font-weight: bold;
  font-size: ${hp(2.5)}px;
  margin-left: ${wp(5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const IconFA5 = styled(FontAwesome5)`
  font-size: ${hp(3)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${(props: IColorsProps) => props.colors.background_glass};
`;
export const ModalBox = styled.View`
  width: ${wp(80)}px;
  height: ${hp(47)}px;
  border-radius: ${wp(2)}px;
  border-width: ${wp(0.8)}px;
  padding: ${hp(1)}px ${wp(1.5)}px;
  background: ${(props: IColorsProps) => props.colors.primary};
  border-color: ${(props: IColorsProps) => props.colors.border_buttons};
`;
export const ModalIconView = styled.TouchableOpacity`
  width: 100%;
  height: ${hp(4.2)}px;
  align-items: flex-end;
  padding-right: ${wp(2)}px;
`;
export const ModalLabel = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: ${hp(3)}px;
  margin-top: ${hp(1)}px;
  margin-bottom: ${hp(3)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const FlatList = styled.FlatList`
  flex: 1;
  padding: ${hp(1)}px ${wp(1.5)}px;
`;
export const ItemButton = styled.TouchableOpacity`
  width: 100%;
  min-height: ${hp(6)}px;
  justify-content: center;
  margin-top: ${hp(0.6)}px;
  border-radius: ${wp(1)}px;
  border-width: ${wp(0.4)}px;
  margin-bottom: ${hp(0.6)}px;
  background: ${(props: IColorsProps) => props.colors.secondary};
  border-color: ${(props: IColorsProps) => props.colors.border_buttons};
`;
export const ItemLabel = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: ${hp(2.5)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
export const IconFA = styled(FontAwesome)`
  font-size: ${hp(4)}px;
  color: ${(props: IColorsProps) => props.colors.text_light};
`;
