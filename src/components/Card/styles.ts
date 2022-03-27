import styled from 'styled-components/native';
import {
  RectButtonProperties
} from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
  height: 80px;
  border-radius: 6px;
  margin-right: 12px;
  margin-left: 12px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 16px;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 17px;
  font-weight: 600;
`;
