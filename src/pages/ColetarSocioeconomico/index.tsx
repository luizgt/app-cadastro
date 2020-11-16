import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import Header from "../../components/Header";
import estilo from "./style";

export default function ColetarEducacao() {
  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("socioeconomico_atual", valueJSON);
      console.log("Dados socioeconômicos salvos:" + value);
    } catch (e) {
      console.log("Erro ao dados socioeconômicos.");
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
    { valor: 0 },
    { valor: 0 },
  ]);
  const [valor, setValor] = useState<number>(0);
  const [socioeconomicos, setSocioeconomicos] = useState<boolean>(false);

  const { navigate } = useNavigation();
  function handleNavigateSaude() {
    if (!socioeconomicos){ // sem dados socioeconomicos
      storeData(0);
      navigate("ColetarSaude");  
      return;
    }

    const dado_socioeconomico = {
      aposentados: array_respostas[0],
      pensionistas: array_respostas[1],
      desempregados: array_respostas[2],
      emp_comercio: array_respostas[3],
      emp_industria: array_respostas[4],
      emp_servico: array_respostas[5],
      emp_rurais: array_respostas[6],
      emp_setor_publico: array_respostas[7],
      autonomo: array_respostas[8],
      emp_informal: array_respostas[9],
      veiculos_local: array_respostas[10],
      veiculos_fora: array_respostas[11],
    };

    storeData(dado_socioeconomico);
    navigate("ColetarSaude");
  }

  return (
    <View style={estilo.container}>
      <Header />
      <View>
        <View style={estilo.viewSubTitulo}>
          <Text style={estilo.textoSubTitulo}>Socioeconômicos</Text>
          <CheckBox
            disabled={false}
            value={socioeconomicos}
            onValueChange={(newValue) => setSocioeconomicos(newValue)}
            style={estilo.marcadorSubTitulo}
          />
        </View>
        <ScrollView>
          {socioeconomicos === false ? (
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
              style={estilo.botaoProximo}
              onPress={handleNavigateSaude}
            >
              <Text style={estilo.textBotaoProximo}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const dados = [
  { nome: "Aposentados", dado: 0, valor: 0 },
  { nome: "Pensionistas", dado: 1, valor: 0 },
  { nome: "Desempregados", dado: 2, valor: 0 },
  { nome: "Emp. no Comércio", dado: 3, valor: 0 },
  { nome: "Emp. na Indústria", dado: 4, valor: 0 },
  { nome: "Emp. em Serviço", dado: 5, valor: 0 },
  { nome: "Emp. Rurais", dado: 6, valor: 0 },
  { nome: "Emp. Setor Público", dado: 7, valor: 0 },
  { nome: "Autônomo", dado: 8, valor: 0 },
  { nome: "Emp. Informal", dado: 9, valor: 0 },
  { nome: "Veículos Local", dado: 10, valor: 0 },
  { nome: "Veículos Fora", dado: 11, valor: 0 },
];
