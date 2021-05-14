import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  position: absolute;
  z-index: 1;
  width: 72px;
  height: 72px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  left: 16px;
  top: 40px;
  border-radius: 36px;
`;
