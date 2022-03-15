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
  const Scroll = styled.ScrollView`
    padding-top: ${wp(6)}px;
    flex: 1;
    /* background-color: red; */
  `;
  const Body = styled.View`
    flex: 0.73;
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
  return {Container, Header, Title, Scroll, Body, Footer, styles};
}
