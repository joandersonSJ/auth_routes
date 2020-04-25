import React,{ useContext } from "react";
import AuthContext from "../../contexts/auth";
import * as S from "./style";

export default function Dashboard() {

  const { user, signed, signOut } = useContext(AuthContext);

  console.log(signed)
  function handleSignOut(){
    signOut()
  }
  return (
    <S.View>
      <S.Text>Olá { user.name } :D</S.Text>
      <S.Button onPress={ handleSignOut }>
        <S.TextButton>Sign in route</S.TextButton>
      </S.Button>
    </S.View>
  );
}
