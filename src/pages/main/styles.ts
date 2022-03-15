import {useFlavor} from '../../flavor';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function useStyle() {
  const {colors} = useFlavor();
  const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: ${hp(5)}px ${wp(5)}px;
    background: ${colors.background};
  `;
  const Header = styled.View`
    flex: 0.25;
    justify-content: center;
  `;
  const Body = styled.View`
    flex: 0.63;
  `;
  const Footer = styled.View`
    flex: 0.12;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  `;
  const Title = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: ${hp(4.5)}px;
    color: ${colors.text_light};
  `;

  const styles = StyleSheet.create({
    icon: {
      color: colors.text_light,
      fontSize: hp(4.5),
    },
  });
  return {Container, Header, Body, Footer, Title, styles};
}
