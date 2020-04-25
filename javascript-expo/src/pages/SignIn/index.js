import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";
import * as S from "./style";

export default function SignIn() {
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  async function handleSignIn() {
    await signIn()// Como não tem resposta e já é async n preciso usar o await
  }

  return (
    <S.View>
      <S.Text>Sign In page</S.Text>
      <S.Button onPress={handleSignIn}>
        <S.TextButton>Dashboard route</S.TextButton>
      </S.Button>
    </S.View>
  );
}
