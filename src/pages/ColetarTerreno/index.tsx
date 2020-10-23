import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Header from "../../components/Header";

import estilo from "./style";

export default function ColetarTerreno({}) {
  const { navigate } = useNavigation();

  function handleNavigateToEdificacao() {
    navigate("ColetarEdificacao");
  }

  return (
    <View>
      <Header />
      <View style={estilo.viewSubTitulo}>
        <Text style={estilo.textoSubTitulo}>Terreno</Text>
      </View>
      <ScrollView style={estilo.scrollview}>
        {telas.map((obj, key) => (
          <View style={estilo.viewItemTerreno} key={key}>
            <Text style={estilo.textItemTerreno}>{obj.dado}</Text>
            <RNPickerSelect
              placeholder={{}}
              useNativeAndroidPickerStyle={true}
              onValueChange={(value: string, key: number) =>
                console.warn(value, key)
              }
              items={obj.perguntas}
            />
          </View>
        ))}
        <View style={estilo.viewBotaoProximo}>
          <TouchableOpacity style={estilo.botaoProximo} onPress={handleNavigateToEdificacao}>
            <Text style={estilo.textBotaoProximo}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const telas = [
  {
    dado: "Estrutura",
    key: 1,
    perguntas: [
      { label: "Vôlei", value: "volley", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Revestimento Externo",
    key: 2,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Piso",
    key: 3,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Forro",
    key: 4,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Revestimento interno",
    key: 5,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Pintura",
    key: 6,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Instalação elétrica e hidráulica",
    key: 7,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Cobertura",
    key: 8,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Posição",
    key: 9,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Sit. Construção",
    key: 10,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Esquadrias",
    key: 11,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
  {
    dado: "Estado de conservação",
    key: 12,
    perguntas: [
      { label: "Football", value: "foot", key: 2 },
      { label: "Baseball", value: "base", key: 3 },
      { label: "Hockey", value: "hockey", key: 4 },
    ],
  },
];
