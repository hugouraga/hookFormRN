import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100px;
  align-items: center;
  justify-content: center;
  padding-top: ${getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 23px;
  font-weight: 600;
`;
