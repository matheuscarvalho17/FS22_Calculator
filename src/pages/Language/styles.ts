import {useFlavor} from '../../flavor';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export function useStyle() {
  const {colors} = useFlavor();

  const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: ${hp(5)}px ${wp(5)}px;
    background: ${colors.background};
  `;
  const Header = styled.View`
    flex: 0.15;
    justify-content: center;
  `;
  const Title = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: ${hp(4.5)}px;
    color: ${colors.text_light};
  `;
  const ButtonContent = styled.View`
    flex-direction: row;
  `;
  const Flag = styled.Text`
    flex: 0.4;
    text-align: center;
    font-weight: bold;
    font-size: ${hp(4)}px;
    color: ${colors.text_light};
  `;
  const Text = styled.Text`
    flex: 0.6;
    font-weight: bold;
    font-size: ${hp(4)}px;
    color: ${colors.text_light};
  `;
  const ScrollBody = styled.ScrollView`
    flex: 0.73;
  `;
  const List = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${hp(0)}px ${wp(5)}px;
  `;
  const Footer = styled.View`
    flex: 0.12;
  `;

  const styles = StyleSheet.create({
    icon: {
      fontSize: hp(4.5),
      color: colors.text_light,
    },
  });
  return {
    Container,
    Header,
    Title,
    Flag,
    Text,
    ButtonContent,
    ScrollBody,
    List,
    Footer,
    styles,
  };
}
