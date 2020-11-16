import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";

import estilo from "./style";

export default function Home() {
  const [indice_banco_local, setIndiceArmazenamento] = useState("armazenamento_1");

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem(indice_banco_local, value);

      console.log("Salvo:" + value);
      console.log("\n");
    } catch (e) {
      console.log("Erro ao salvar...");
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(indice_banco_local);
      if (value !== null) {
        console.log("Valor recuperado:" + value);
        return value;
      } 
    } catch (e) {
      console.warn("Erro ao obter dado...");
    }
  };

  const { navigate } = useNavigation();

  /**
   * seta o novo valor de índice de coletas e chama a próxima tela.
   */
  async function handleNavigateToEndereco() {
    navigate("ColetarEndereco");
  }
  function handleNavigateToGerenciarColetas() {
    navigate("GerenciarColetas");
  }

  return (
    <View style={estilo.container}>
      <View style={estilo.container_botoes}>
        <TouchableOpacity
          style={[estilo.botao_comecar, estilo.largura_botoes]}
          onPress={handleNavigateToEndereco}
        >
          <Text style={estilo.text_botao}>Iniciar Coleta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            estilo.botao_visualizar,
            estilo.margin_top20,
            estilo.largura_botoes,
          ]}
          onPress={handleNavigateToGerenciarColetas}
        >
          <Text style={estilo.text_botao}>Visualizar Coletas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
