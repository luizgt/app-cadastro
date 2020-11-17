import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import Header from "../../components/Header";

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
    const dado = array_dados === undefined ? [] : await JSON.parse(array_dados);

    await setDados(dados_coletados.concat(dado));
    // console.log(dados_coletados);
  }

  // obterEndereco();

  return (
    <View style={estilo.container}>
      <Header estilo={0} titulo="Dados Coletados" />
      <ScrollView style={estilo.container}>
        {dados_coletados.map((dado_coleta: Coleta, index) => {
          return (
            <View style={estilo.cardColeta} key={index}>
              <View style={estilo.viewCardColeta}>
                <View style={estilo.headerCard}>
                  <Text style={estilo.headerTextCard}>Endereço</Text>
                </View>
                <Text style={estilo.textCard}>
                  {dado_coleta.endereco.rua +
                    ", " +
                    dado_coleta.endereco.numero}
                </Text>

                {dado_coleta.endereco.complemento !== "" ? (
                  <View>
                    <Text style={estilo.textCard}>
                      {dado_coleta.endereco.complemento}
                    </Text>
                  </View>
                ) : (
                  <View></View>
                )}

                <Text style={estilo.textCard}>
                  {dado_coleta.endereco.bairro}
                </Text>

                <Text style={estilo.textCard}>
                  {dado_coleta.endereco.cidade}
                </Text>

                <View style={estilo.viewBotoes}>
                  <TouchableHighlight
                    style={estilo.botaoSalvar}
                    onPress={() => enviarDadosParaBanco(dado_coleta)}
                  >
                    <Text style={estilo.textoSalvar}>Enviar Dados</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style={estilo.botaoExcluir}>
                    <Text style={estilo.textoExcluir}>Excluir Dados</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );

  async function enviarDadosParaBanco(dados: Coleta) {
    await fetch("http://192.168.1.103:8080/armazenar_coleta", {
      method: "POST",
      body: JSON.stringify(dados),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => {
      alert("Dados não enviados " + err);
    });
  }

  type Coleta = {
    endereco: {
      rua: string;
      numero: string;
      complemento: string;
      bairro: string;
      cidade: string;
    };
    terreno: Object;
    edificacao: Object;
    residentes: Object;
    comunicacao: Object;
    educacao: Object;
    beneficios: Object;
    socioeconomicos: Object;
    doencas: Object;
  };
}
