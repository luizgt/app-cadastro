import React from "react";
import { View, Text } from "react-native";

import estilo from "./style";

const tipoTela1 = (
  <View style={[estilo.tamanhoHeader, estilo.headerFundoBranco]}>
    <Text style={estilo.headerTextRosa}>Coletar Dados</Text>
  </View>
);

const tipoTela2 = (
  <View style={[estilo.tamanhoHeader, estilo.headerFundoRosa]}>
    <Text style={estilo.headerTextBranco}>Coletar Dados</Text>
  </View>
);

const tipoTela3 = (
  <View style={[estilo.tamanhoHeader, estilo.headerFundoRoxo]}>
    <Text style={estilo.headerTextBranco}>Coletar Dados</Text>
  </View>
);

/**
 * Renderiza o header escolhido.
 * @param valor variável para escolher o header desejado 
 */
const renderizarTela = (valor: number) => {
  switch (valor) {
    case 0:
      return tipoTela1;
    case 1:
      return tipoTela2;
    case 2:
      return tipoTela3;
    default:
      return tipoTela1;
  }
};

const tipoTela: number = 0;

export default function Header() {
  return renderizarTela(tipoTela);
}
