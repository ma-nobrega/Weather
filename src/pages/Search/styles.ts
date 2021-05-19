import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 16px;
  background-color: ${colors.background};
`;

export const Back = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 16px;
`;

export const SearchBox = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: ${colors.white};
  width: 100%;
  height: 54px;
  border-radius: 8px;
`;

export const Input = styled.TextInput`
  width: 85%;
  height: 100%;
  padding: 8px 16px;
`;

export const Icon = styled.TouchableOpacity`
  width: 15%;
  height: 100%;
  background-color: ${colors.blue};
  align-items: center;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  justify-content: center;
`;

export const Date = styled.Text`
  color: ${colors.white};
  font-size: 16px;
`;
export const City = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
`;
export const Temperature = styled.Text`
  color: ${colors.white};
  font-size: 80px;
  font-weight: bold;
`;
