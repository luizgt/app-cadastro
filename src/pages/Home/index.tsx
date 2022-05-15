import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image } from "react-native";

import estilo from "./style";
import cores from "../../styles/colors";

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
      <View style={estilo.containerImagem}>
        <Image
          style={{height: 450, width: 450, backgroundColor: "black"}}
          source={require('./../../img/icon.png')}
        />
      </View>
      <View style={estilo.container_botoes}>
        <TouchableOpacity
          style={[estilo.botao_comecar, estilo.largura_botoes, cores.background_azulescuro]}
          onPress={handleNavigateToEndereco}
        >
          <Text style={estilo.text_botao}>Iniciar Coleta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            estilo.botao_visualizar,
            estilo.margin_top20,
            estilo.largura_botoes,
            cores.background_azulmedio
          ]}
          onPress={handleNavigateToGerenciarColetas}
        >
          <Text style={estilo.text_botao}>Visualizar Coletas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
