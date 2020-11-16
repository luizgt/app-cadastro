import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import estilo from "./style";
import AsyncStorage from "@react-native-community/async-storage";

export default function GerenciarColetas() {
  const { navigate } = useNavigation();
  const [dados_coletados, setDados] = useState([]);

  const getData = async (id_dado: string) => {
    try {
      const value = await AsyncStorage.getItem(id_dado);
      if (value !== null) {
        // console.log("Valor recuperado:" + value);
        return value;
      }
    } catch (e) {
      console.warn("Erro ao obter dado...");
    }
  };

  useEffect(() => {
    obterDados();
  }, []);

  async function obterDados() {
    let array_dados = await getData("array_coletas");
    const dado = JSON.parse(array_dados);
    
    await setDados(dados_coletados.concat(dado));
    console.log(dados_coletados);
    // endereco: endereco,
    //   terreno: terreno,
    //   edificacao: edificacao,
    //   residentes: residentes,
    //   comunicacao: comunicacao,
    //   educacao: educacao,
    //   beneficios: beneficios,
    //   socioeconomicos: socioeconomicos,
    //   doencas: doencas,
  }

  // obterEndereco();
  return (
    <View style={estilo.container}>
      {dados_coletados.map((dado_coleta) => {
        return (
          <View style={estilo.cardColeta}>
            <Text style={estilo.textCard}>Endereço</Text>
            <Text style={estilo.textCard}>{dado_coleta.endereco.rua + ", " + dado_coleta.endereco.numero}</Text>

            <Text style={estilo.textCard}>Complemento:</Text>
            <Text style={estilo.textCard}>{dado_coleta.endereco.complemento}</Text>

            <Text style={estilo.textCard}>Numero:</Text>
            <Text style={estilo.textCard}>{dado_coleta.endereco.bairro}</Text>

            <Text style={estilo.textCard}>Numero:</Text>
            <Text style={estilo.textCard}>{dado_coleta.endereco.cidade}</Text>
          </View>
        );
      })}
    </View>
  );
}
