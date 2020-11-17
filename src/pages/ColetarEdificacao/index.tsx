import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import Header from "../../components/Header";
import estilo from "./style";

export default function ColetarEdificacao({}) {
  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("edificacao_atual", valueJSON);
      console.log("Edificação salva:" + value);
    } catch (e) {
      console.log("Erro ao salvar edificação.");
    }
  };

  const [array_respostas, setArrayEdificacao] = useState([
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

  const [edificacao, setEdificacao] = useState<boolean>(true);

  const { navigate } = useNavigation();

  async function handleNavigateToResidentes() {
    let validacao = false;

    if (!edificacao) {
      //salvando sem edificação
      console.log("sem edificação");
      await storeData(0);
      navigate("ColetarResidentes");

      return;
    }

    if (
      array_respostas[0].valor != 0 &&
      array_respostas[1].valor != 0 &&
      array_respostas[2].valor != 0 &&
      array_respostas[3].valor != 0 &&
      array_respostas[4].valor != 0 &&
      array_respostas[5].valor != 0 &&
      array_respostas[6].valor != 0 &&
      array_respostas[7].valor != 0 &&
      array_respostas[8].valor != 0 &&
      array_respostas[9].valor != 0 &&
      array_respostas[10].valor != 0 &&
      array_respostas[11].valor != 0
    )
      validacao = true;

    if (validacao) {
      const dado_edificacao = {
        estrutura: array_respostas[0],
        revestimento_externo: array_respostas[1],
        piso: array_respostas[2],
        forro: array_respostas[3],
        revestimento_interno: array_respostas[4],
        pintura: array_respostas[5],
        inst_eh: array_respostas[6],
        cobertura: array_respostas[7],
        posicao: array_respostas[8],
        sit_construcao: array_respostas[9],
        esquadrias: array_respostas[10],
        est_conservacao: array_respostas[11],
      };

      await storeData(dado_edificacao);
      navigate("ColetarResidentes");
    }
  }

  return (
    <View>
      <Header estilo={0} titulo="Coletar Dados" />
      <View style={estilo.viewSubTitulo}>
        <Text style={estilo.textoSubTitulo}>Edificação</Text>
        <CheckBox
          disabled={false}
          value={edificacao}
          onValueChange={(newValue) => setEdificacao(newValue)}
          style={estilo.marcadorSubTitulo}
        />
      </View>
      <ScrollView style={estilo.scrollview}>
        {edificacao === false ? (
          <View style={estilo.viewSemEdificacao}>
            <Text style={estilo.textSemEdificacao}>Sem Edificação</Text>
          </View>
        ) : (
          telas.map((obj, key) => (
            <View style={estilo.viewItemTerreno} key={key}>
              <Text style={estilo.textItemTerreno}>{obj.nome}</Text>
              <RNPickerSelect
                placeholder={{}}
                useNativeAndroidPickerStyle={true}
                onValueChange={(value: string, key: number) => {
                  let array_novo = [...array_respostas];
                  array_novo[obj.dado] = { ObjDado: obj.dado, valor: value };

                  setArrayEdificacao(array_novo);
                }}
                items={obj.perguntas}
              />
            </View>
          ))
        )}
        <View style={estilo.viewBotaoProximo}>
          <TouchableOpacity
            style={estilo.botaoProximo}
            onPress={handleNavigateToResidentes}
          >
            <Text style={estilo.textBotaoProximo}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const telas = [
  {
    nome: "Estrutura",
    dado: 0,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Madeira", value: 1 },
      { label: "Mista", value: 2 },
      { label: "Alvenaria", value: 3 },
      { label: "Metálica", value: 4 },
      { label: "Concreto", value: 5 },
      { label: "Outra", value: 6 },
    ],
  },
  {
    nome: "Revestimento Externo",
    dado: 1,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Nenhum", value: 1 },
      { label: "Chapisco", value: 2 },
      { label: "Reboco", value: 3 },
      { label: "Tijolo a vista", value: 4 },
      { label: "Massa corrida", value: 5 },
      { label: "Cerâmica", value: 6 },
    ],
  },
  {
    nome: "Piso",
    dado: 2,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Terra batida", value: 1 },
      { label: "Cimento", value: 2 },
      { label: "Taco (antigo)", value: 3 },
      { label: "Carpete (Tecido)", value: 4 },
      { label: "Cerâmica", value: 5 },
      { label: "Madeira de lei", value: 6 },
    ],
  },
  {
    nome: "Forro",
    dado: 3,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Nenhum", value: 1 },
      { label: "Madeira", value: 2 },
      { label: "PVC", value: 3 },
      { label: "Laje", value: 4 },
      { label: "Gesso", value: 5 },
    ],
  },
  {
    nome: "Revestimento interno",
    dado: 4,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Nenhum", value: 1 },
      { label: "Chapisco", value: 2 },
      { label: "Reboco", value: 3 },
      { label: "Textura", value: 4 },
      { label: "Massa corrida", value: 5 },
      { label: "Cerâmica", value: 6 },
    ],
  },
  {
    nome: "Pintura",
    dado: 5,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Nenhum", value: 1 },
      { label: "Caiação", value: 2 },
      { label: "Latéx PVA", value: 3 },
      { label: "Acrílica", value: 4 },
      { label: "Textura", value: 5 },
      { label: "Especial", value: 6 },
    ],
  },
  {
    nome: "Instalação elétrica e hidráulica",
    dado: 6,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Nenhum", value: 1 },
      { label: "Elétrica", value: 2 },
      { label: "Hidráulica", value: 3 },
      { label: "Ambos", value: 4 },
    ],
  },
  {
    nome: "Cobertura",
    dado: 7,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Laje", value: 1 },
      { label: "Fibro cimento", value: 2 },
      { label: "Telha cerâmica", value: 3 },
      { label: "Alumínio", value: 4 },
      { label: "Especial", value: 5 },
    ],
  },
  {
    nome: "Posição",
    dado: 8,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Conjugada", value: 1 },
      { label: "Geminada", value: 2 },
      { label: "Superposta", value: 3 },
      { label: "Isolada", value: 4 },
    ],
  },
  {
    nome: "Sit. Construção",
    dado: 9,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Fundos", value: 1 },
      { label: "Fachada alinhada", value: 2 },
      { label: "Fachada recuada", value: 3 },
    ],
  },
  {
    nome: "Esquadrias",
    dado: 10,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Madeira rústica", value: 1 },
      { label: "Aço pintado", value: 2 },
      { label: "Alumínio", value: 3 },
      { label: "Madeira de lei", value: 4 },
    ],
  },
  {
    nome: "Estado de conservação",
    dado: 11,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Ótimo", value: 1 },
      { label: "Bom", value: 2 },
      { label: "Regular", value: 3 },
      { label: "Ruim", value: 4 },
    ],
  },
];
