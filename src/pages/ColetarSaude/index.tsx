import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from 'expo-checkbox';;

import Header from "../../components/Header";

import estilo from "./style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import components from "../../styles/components";

export default function ColetarEducacao() {
  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("saude_atual", valueJSON);
      console.log("Saúde salvo:" + value);
    } catch (e) {
      console.log("Erro ao salvar saúde.");
    }
  };

  const storeColeta = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("array_coletas", valueJSON);
      console.log("Coletas salvas!");
    } catch (e) {
      console.log("Erro ao salvar coletas.");
    }
  };

  const getData = async (id_dado: string) => {
    try {
      const value = await AsyncStorage.getItem(id_dado);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      console.warn("Erro ao obter dado...");
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
    { valor: 0 },
    { valor: 0 },
    { valor: 0 },
  ]);
  const [valor, setValor] = useState<number>(0);
  const [saude, setSaude] = useState<boolean>(false);
  const { navigate } = useNavigation();

  async function handleNavigateFinalizar() {
    console.log(saude);
    if (!saude) {
      //sem dados sobre saude
      await storeData(0);
    } else {
      const dado_saude = {
        cardiopatia: array_respostas[0],
        cancer: array_respostas[1],
        def_auditiva: array_respostas[2],
        def_fisica: array_respostas[3],
        def_mental: array_respostas[4],
        dengue: array_respostas[5],
        dep_quimica: array_respostas[6],
        depressao: array_respostas[7],
        dist_linguagem: array_respostas[8],
        fibromialgia: array_respostas[9],
        hanseniase: array_respostas[10],
        hipertensao: array_respostas[11],
        mal_de_parkinson: array_respostas[12],
        tuberculose: array_respostas[13],
        aids: array_respostas[14],
      };

      await storeData(dado_saude);
    }

    const endereco = await getData("endereco_atual");
    const terreno = await getData("terreno_atual");
    const edificacao = await getData("edificacao_atual");
    const residentes = await getData("residentes_atual");
    const comunicacao = await getData("comunicacao_atual");
    const educacao = await getData("educacao_atual");
    const beneficios = await getData("beneficio_assistencial_atual");
    const socioeconomicos = await getData("socioeconomico_atual");
    const doencas = await getData("saude_atual");

    let array = await getData("array_coletas");

    //caso nenhuma coleta tenha sido feita ainda
    if (array === null || array === undefined || array!.length === 0) {
      const array_coletas = [
        {
          endereco: endereco === undefined ? "" : endereco,
          terreno: terreno ? "" : terreno,
          edificacao: edificacao ? "" : edificacao,
          residentes: residentes ? "" : residentes,
          comunicacao: comunicacao ? "" : comunicacao,
          educacao: educacao ? "" : educacao,
          beneficios: beneficios ? "" : beneficios,
          socioeconomicos: socioeconomicos ? "" : socioeconomicos,
          doencas: doencas ? "" : doencas,
        },
      ];
      storeColeta(array_coletas);
    } else {
      const coleta = {
        endereco: endereco,
        terreno: terreno,
        edificacao: edificacao,
        residentes: residentes,
        comunicacao: comunicacao,
        educacao: educacao,
        beneficios: beneficios,
        socioeconomicos: socioeconomicos,
        doencas: doencas,
      };

      array.push(coleta);
      await storeColeta(array);
    }

    navigate("Home");
  }

  return (
    <View style={estilo.container}>
      <Header estilo={0} titulo="Coletar Dados" />
      <View>
        <View style={components.viewSubTitulo}>
          <Text style={components.textoSubTitulo}>Saúde</Text>
          <CheckBox
            disabled={false}
            value={saude}
            onValueChange={(newValue) => setSaude(newValue)}
            style={estilo.marcadorSubTitulo}
          />
        </View>
        <ScrollView>
          {saude === false ? (
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
              onPress={handleNavigateFinalizar}
            >
              <Text style={components.textBotaoProximo}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const dados = [
  { nome: "Cardiopatia", dado: 0, valor: 0 },
  { nome: "Câncer", dado: 1, valor: 0 },
  { nome: "Def. auditiva", dado: 2, valor: 0 },
  { nome: "Def. física", dado: 3, valor: 0 },
  { nome: "Def. mental", dado: 4, valor: 0 },
  { nome: "Dengue", dado: 5, valor: 0 },
  { nome: "Dep. Química", dado: 6, valor: 0 },
  { nome: "Depressão", dado: 7, valor: 0 },
  { nome: "Dist. linguagem", dado: 8, valor: 0 },
  { nome: "Fibromialgia", dado: 9, valor: 0 },
  { nome: "Hanseníase", dado: 10, valor: 0 },
  { nome: "Hipertensão", dado: 11, valor: 0 },
  { nome: "Mal de Parkinson", dado: 12, valor: 0 },
  { nome: "Tuberculose", dado: 13, valor: 0 },
  { nome: "AIDS", dado: 14, valor: 0 },
];
