import {useFlavor} from '../../flavor';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function useStyle() {
  const {colors} = useFlavor();

  const Box = styled.TouchableOpacity`
    width: ${wp(80)}px;
    height: ${hp(7)}px;
    align-items: center;
    flex-direction: row;
    border-width: ${wp(0.8)}px;
    background: ${colors.secondary};
    border-top-right-radius: ${wp(1)}px;
    border-top-left-radius: ${wp(5.5)}px;
    border-bottom-left-radius: ${wp(1)}px;
    border-color: ${colors.border_buttons};
    border-bottom-right-radius: ${wp(5.5)}px;
  `;
  const LabelView = styled.View`
    flex: 0.8;
  `;
  const IconView = styled.View`
    flex: 0.2;
    align-items: center;
  `;
  const Label = styled.Text`
    font-weight: bold;
    font-size: ${hp(2.5)}px;
    margin-left: ${wp(5)}px;
    color: ${colors.text_light};
  `;
  const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${colors.background_glass};
  `;
  const ModalBox = styled.View`
    width: ${wp(80)}px;
    height: ${hp(50)}px;
    border-radius: ${wp(2)}px;
    border-width: ${wp(0.8)}px;
    background: ${colors.secondary};
    border-color: ${colors.border_buttons};
  `;
  const ModalIconView = styled.TouchableOpacity`
    /* background: red; */
    width: 100%;
    height: ${hp(4.2)}px;
    align-items: flex-end;
    padding-right: ${wp(2)}px;
  `;
  const ModalLabel = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: ${hp(3)}px;
    margin-top: ${hp(1)}px;
    color: ${colors.text_light};
  `;

  const styles = StyleSheet.create({
    icon: {
      fontSize: hp(3),
      color: colors.text_light,
    },
    iconExit: {
      fontSize: hp(4),
      color: colors.text_light,
    },
  });
  return {
    Box,
    Label,
    LabelView,
    IconView,
    ModalContainer,
    ModalBox,
    ModalIconView,
    ModalLabel,
    styles,
  };
}
