import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  color: #fff;
  font-size: 16px;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
`;
