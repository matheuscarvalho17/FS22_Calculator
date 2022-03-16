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
    flex: 0.15;
    justify-content: center;
  `;
  const Title = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: ${hp(4.5)}px;
    color: ${colors.text_light};
  `;
  const ScrollBody = styled.ScrollView`
    flex: 0.73;
  `;
  const List = styled.View`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    padding: ${hp(0)}px ${wp(5)}px;
  `;
  const Footer = styled.View`
    flex: 0.12;
  `;
  const ImageBg = styled.ImageBackground``;

  const styles = StyleSheet.create({
    btn: {
      width: wp(20),
      height: wp(20),
      marginLeft: wp(2),
      marginRight: wp(2),
      backgroundColor: '#26343d',
    },
    btnImage: {
      width: wp(15.5),
      height: wp(15.5),
    },
    icon: {
      fontSize: hp(4.5),
      color: colors.text_light,
    },
  });
  return {Container, Header, Title, ScrollBody, List, Footer, ImageBg, styles};
}
