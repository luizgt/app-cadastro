import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import Header from "../../components/Header";
import estilo from "./style";

export default function ColetarResidentes() {
  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("residentes_atual", valueJSON);
      console.log("Residentes salvo:" + value);
    } catch (e) {
      console.log("Erro ao salvar residentes.");
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
  const [residentes, setResidentes] = useState<boolean>(false);

  const { navigate } = useNavigation();

  function handleNavigateToComunicacao() {
    if (!residentes) {
      //sem residentes
      storeData(0);
      navigate("ColetarComunicacao");
      return;
    }

    const dado_residentes = {
      mulheres: array_respostas[0],
      homens: array_respostas[1],
      outros_gêneros: array_respostas[2],
      um_ano: array_respostas[3],
      um_a_tres: array_respostas[4],
      quatro_a_cinco: array_respostas[5],
      seis_a_nove: array_respostas[6],
      dez_a_quinze: array_respostas[7],
      dezesseis_a_vinteum: array_respostas[8],
      vintedois_a_quarentacinco: array_respostas[9],
      quarentacinco_a_sessenta: array_respostas[10],
      sessenta_anos: array_respostas[11],
    };

    storeData(dado_residentes);
    navigate("ColetarComunicacao");
  }

  return (
    <View style={estilo.container}>
      <Header estilo={0} titulo="Coletar Dados" />
      <View>
        <View style={estilo.viewSubTitulo}>
          <Text style={estilo.textoSubTitulo}>Residentes</Text>
          <CheckBox
            disabled={false}
            value={residentes}
            onValueChange={(newValue) => setResidentes(newValue)}
            style={estilo.marcadorSubTitulo}
          />
        </View>
        <ScrollView>
          {residentes === false ? (
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
              onPress={handleNavigateToComunicacao}
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
  { nome: "Mulheres", dado: 0, valor: 0 },
  { nome: "Homens", dado: 1, valor: 0 },
  { nome: "Outros gêneros", dado: 2, valor: 0 },
  { nome: "< 1 ano", dado: 3, valor: 0 },
  { nome: "1 a 3", dado: 4, valor: 0 },
  { nome: "4 a 5", dado: 5, valor: 0 },
  { nome: "6 a 9", dado: 6, valor: 0 },
  { nome: "10 a 15", dado: 7, valor: 0 },
  { nome: "16 a 21", dado: 8, valor: 0 },
  { nome: "22 a 45", dado: 9, valor: 0 },
  { nome: "45 a 60", dado: 10, valor: 0 },
  { nome: "> 60 anos", dado: 11, valor: 0 },
];
