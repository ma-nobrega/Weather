import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.white};
  margin-right: 12px;
  border-radius: 8px;
  width: 80px;
  justify-content: space-evenly;
  align-items: center;
`;
export const Date = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Temp = styled.View`
  align-items: center;
`;
