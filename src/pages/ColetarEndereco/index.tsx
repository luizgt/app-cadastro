import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import Header from "../../components/Header";

import estilo from "./style";

export default function ColetarEndereco() {
  return (
    <View>
      <Header />
      <View>
        <View style={estilo.viewSubTitulo}>
          <Text style={estilo.textoSubTitulo}>Endereço</Text>
        </View>
        <TextInput style={estilo.textInput} placeholder="Rua"/>
        <TextInput style={estilo.textInput} keyboardType="number-pad" placeholder="Número"/>
        <TextInput style={estilo.textInput} placeholder="Complemento"/>
        <TextInput style={estilo.textInput} placeholder="Bairro"/>
        <TextInput style={estilo.textInput} placeholder="Cidade"/>
      </View>
      <View style={estilo.viewBotaoProximo}>
        <TouchableOpacity style={estilo.botaoProximo}>
          <Text style={estilo.textBotaoProximo}>
            Próximo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
