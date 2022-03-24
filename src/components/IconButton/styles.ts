import styled from 'styled-components/native';
import {Button as IButton} from '../Button/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Button = styled(IButton)`
  width: ${wp(18)}px;
  height: ${wp(18)}px;
`;
