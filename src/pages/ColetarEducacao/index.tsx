import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../../components/Header";
import estilo from "./style";
import components from "../../styles/components";

export default function ColetarEducacao() {
  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("educacao_atual", valueJSON);
      console.log("Educação salvo:" + value);
    } catch (e) {
      console.log("Erro ao salvar educação.");
    }
  };

  const [array_respostas, setArrayResidentes] = useState([
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
  ]);
  const [valor, setValor] = useState<number>(0);
  const [educacao, setEducacao] = useState<boolean>(false);

  const { navigate } = useNavigation();
  function handleNavigateToBeneficiosAssistenciais() {
    if (!educacao) {
      storeData(0);
      navigate("ColetarBeneficiosAssistenciais");
      return;
    }

    const dado_educacao = {
      analfabetos: array_respostas[0].valor,
      creche: array_respostas[1].valor,
      pre_publica: array_respostas[2].valor,
      pre_particular: array_respostas[3].valor,
      fund_publico: array_respostas[4].valor,
      fund_particular: array_respostas[5].valor,
      medio_publico: array_respostas[6].valor,
      medio_particular: array_respostas[7].valor,
      sup_publico: array_respostas[8].valor,
      sup_particular: array_respostas[9].valor,
    };

    storeData(dado_educacao);
    navigate("ColetarBeneficiosAssistenciais");
  }

  return (
    <View style={estilo.container}>
      <Header estilo={0} titulo="Coletar Dados" />
      <View>
        <View style={components.viewSubTitulo}>
          <Text style={components.textoSubTitulo}>Educação</Text>
          <CheckBox
            disabled={false}
            value={educacao}
            onValueChange={(newValue) => setEducacao(newValue)}
            style={estilo.marcadorSubTitulo}
          />
        </View>
        <ScrollView>
          {educacao === false ? (
            <View style={estilo.viewSemResidentes}>
              <Text style={estilo.textSemResidentes}>Sem Residentes</Text>
            </View>
          ) : (
            dados.map((obj, key) => (
              <View style={estilo.viewLinhaPergunta} key={key}>
                <Text style={estilo.textPergunta}>{obj.nome}</Text>

                <View style={estilo.viewValores}>
                  <TouchableOpacity
                    onPress={() => {
                      array_respostas[obj.dado].valor > 0
                        ? setValor(array_respostas[obj.dado].valor--)
                        : 0;
                    }}
                  >
                    <Text style={[estilo.textValores, estilo.vermelho]}>-</Text>
                  </TouchableOpacity>
                  <Text style={estilo.textValor}>
                    {array_respostas[obj.dado].valor}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setValor(array_respostas[obj.dado].valor++)}
                  >
                    <Text style={[estilo.textValores, estilo.azul]}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}

          <View style={estilo.viewBotaoProximo}>
            <TouchableOpacity
              style={components.botaoProximo}
              onPress={handleNavigateToBeneficiosAssistenciais}
            >
              <Text style={components.textBotaoProximo}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const dados = [
  { nome: "Analfabetos", dado: 0, valor: 0 },
  { nome: "Creche", dado: 1, valor: 0 },
  { nome: "Pré pública", dado: 2, valor: 0 },
  { nome: "Pré particular", dado: 3, valor: 0 },
  { nome: "Fund. público", dado: 4, valor: 0 },
  { nome: "Fund. particular", dado: 5, valor: 0 },
  { nome: "Médio público", dado: 6, valor: 0 },
  { nome: "Médio particular", dado: 7, valor: 0 },
  { nome: "Sup. público", dado: 8, valor: 0 },
  { nome: "Sup. particular", dado: 9, valor: 0 },
];
