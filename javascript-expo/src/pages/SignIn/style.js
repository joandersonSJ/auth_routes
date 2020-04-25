import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #222;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 22px;
`;

export const TextButton = styled(Text)`
  color: #222;
  font-size: 18px;
`
export const Button = styled.TouchableOpacity`
  height: 50px;
  background-color: #fff;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 40px;
`