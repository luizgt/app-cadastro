import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";

import cidades from "./cidades";

import Header from "../../components/Header";

import estilo from "./style";

export default function ColetarEndereco() {
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

  const { navigate } = useNavigation();

  async function handleNavigateToEdificacao() {
    const endereco = {
      rua: rua,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
    };
    
    await storeData(endereco);
    navigate("ColetarTerreno");
  }

  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("endereco_atual", valueJSON);
      console.log("Enredeço salvo:" + value);
    } catch (e) {
      console.log("Erro ao salvar endereço.");
    }
  };

  return (
    <View style={estilo.container}>
      <Header estilo={0} titulo="Coletar Dados" />
      <View>
        <View style={estilo.viewSubTitulo}>
          <Text style={estilo.textoSubTitulo}>Endereço</Text>
        </View>
        <View style={estilo.viewTextInput}>
          <TextInput
            style={estilo.textInput}
            placeholder="Rua"
            onChangeText={(text) => setRua(text)}
          />
          <TextInput
            style={estilo.textInput}
            keyboardType="number-pad"
            placeholder="Número"
            onChangeText={(text) => setNumero(text)}
          />
          <TextInput
            style={estilo.textInput}
            placeholder="Complemento"
            onChangeText={(text) => setComplemento(text)}
          />
          <TextInput
            style={estilo.textInput}
            placeholder="Bairro"
            onChangeText={(text) => setBairro(text)}
          />

          <Text style={estilo.textItemCidade}>Cidade</Text>
          <RNPickerSelect
            placeholder={{}}
            useNativeAndroidPickerStyle={true}
            onValueChange={(value: number, key: number) => {
              let cidade_novo = cidades[value].label;

              console.log(cidade_novo);
              setCidade(cidade_novo);
            }}
            items={cidades}
          />
        </View>
      </View>
      <View style={estilo.viewBotaoProximo}>
        <TouchableOpacity
          style={estilo.botaoProximo}
          onPress={handleNavigateToEdificacao}
        >
          <Text style={estilo.textBotaoProximo}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
