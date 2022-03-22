import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {IColorsProps} from '../../flavor/fs22/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Box = styled.TouchableOpacity`
  width: ${wp(80)}px;
  height: ${hp(8.5)}px;
  align-items: center;
  flex-direction: row;
  border-width: ${wp(0.8)}px;
  background: ${(props: IColorsProps) => props.colors.secondary};
  border-top-right-radius: ${wp(1)}px;
  border-top-left-radius: ${wp(5.5)}px;
  border-bottom-left-radius: ${wp(1)}px;
  border-color: ${(props: IColorsProps) => props.colors.border_buttons};
  border-bottom-right-radius: ${wp(5.5)}px;
`;
export const LabelView = styled.View`
  flex: 0.8;
`;
export const IconView = styled.View`
  flex: 0.2;
  align-items: center;
`;
export const Label = styled.Text`
  font-weight: bold;
  font-size: ${hp(2.5)}px;
  margin-left: ${wp(5)}px;
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
  background: ${(props: IColorsProps) => props.colors.primary};
  padding: ${hp(1)}px ${wp(1.5)}px;
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

export const styles = StyleSheet.create({
  icon: {
    fontSize: hp(3),
    // color: colors.text_light,
    color: 'white',
  },
  iconExit: {
    fontSize: hp(4),
    // color: colors.text_light,
    color: 'white',
  },
});
