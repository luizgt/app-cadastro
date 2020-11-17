import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

import estilo from "./style";

const Tela1 = (props: {titulo: string}) => {
  return (
    <View style={[estilo.tamanhoHeader, estilo.headerFundoBranco]}>
      <Text style={estilo.headerTextRosa}>{props.titulo}</Text>
    </View>
  );
};

const Tela2 = (props: {titulo: string}) => {
  return (
    <View style={[estilo.tamanhoHeader, estilo.headerFundoBranco]}>
      <Text style={estilo.headerTextRosa}>{props.titulo}</Text>
    </View>
  );
};

const Tela3 = (props: {titulo: string}) => {
  return (
    <View style={[estilo.tamanhoHeader, estilo.headerFundoRosa]}>
      <Text style={estilo.headerTextBranco}>{props.titulo}</Text>
    </View>
  );
};

const Tela4 = (props: {titulo: string}) => {
  return (
    <View style={[estilo.tamanhoHeader, estilo.headerFundoRoxo]}>
      <Text style={estilo.headerTextBranco}>{props.titulo}</Text>
    </View>
  );
};

export default function Header(props: {estilo:number, titulo:string}) {
  switch (props.estilo) {
    case 0:
      return <Tela1 titulo={props.titulo} />;
    case 1:
      return <Tela2 titulo={props.titulo} />;
    case 2:
      return <Tela3 titulo={props.titulo} />;
    case 3:
      return <Tela4 titulo={props.titulo} />;
    default:
      return <Tela1 titulo={props.titulo} />;
  }
}
