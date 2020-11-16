import React, { useState } from "react";
import { Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import estilo from "./style";
import Header from "../../components/Header";
import { render } from "react-dom";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

/**
 * tipo de objeto para salvar no armazenamento local.
 */

export default function ColetarBeneficiosAssistenciais() {

  const [marcador0, setMarcador0] = useState(false);
  const [marcador1, setMarcador1] = useState(false);
  
  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("comunicacao_atual", valueJSON);
      console.log("Comunicação salva:" + value);
    } catch (e) {
      console.log("Erro ao salvar comunicação.");
    }
  };

  const dados = [
    { dado: "Telefone Fixo", checked: false },
    { dado: "Internet", checked: false }
  ];

  const {navigate} = useNavigation();
  function handleNavigateToEducacao(){

    const dado_comunicacao = {
      telefone_fixo: marcador0,
      internet: marcador1
    }

    storeData(dado_comunicacao);
    navigate("ColetarEducacao");
  }

  return (
    <View style={estilo.container}>
      <Header />
      <View>
        <View style={estilo.viewSubTitulo}>
          <Text style={estilo.textoSubTitulo}>Comunicação</Text>
        </View>
        <View>
          <View style={estilo.viewLinhaPergunta}>
            <Text style={estilo.textLinhaPergunta}>{dados[0].dado}</Text>
            <CheckBox
              value={marcador0}
              onValueChange={(newValue) => {
                setMarcador0(newValue);
                dados[0].checked = newValue;
              }}
              style={estilo.marcadorSubTitulo}
            />
          </View>

          <View style={estilo.viewLinhaPergunta}>
            <Text style={estilo.textLinhaPergunta}>{dados[1].dado}</Text>
            <CheckBox
              value={marcador1}
              onValueChange={(newValue) => {
                setMarcador1(newValue);
                dados[1].checked = newValue;
              }}
              style={estilo.marcadorSubTitulo}
            />
          </View>

          <View style={estilo.viewBotaoProximo}>
            <TouchableOpacity
              style={estilo.botaoProximo}
              onPress={handleNavigateToEducacao}
            >
              <Text style={estilo.textBotaoProximo}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
