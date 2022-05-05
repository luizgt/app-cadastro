import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../../components/Header";

import estilo from "./style";
import components from "../../styles/components";

export default function ColetarTerreno({}) {
  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("terreno_atual", valueJSON);
      console.log("Endereço salvo:" + value);
    } catch (e) {
      console.log("Erro ao salvar terreno.");
    }
  };

  const [terreno, setTerreno] = useState([0, 0, 0, 0, 0, 0, 0]);
  const { navigate } = useNavigation();

  async function handleNavigateToEdificacao() {
    let validacao = false;

    if (
      terreno[0] != 0 &&
      terreno[1] != 0 &&
      terreno[2] != 0 &&
      terreno[3] != 0 &&
      terreno[4] != 0 &&
      terreno[5] != 0 &&
      terreno[6] != 0 
    )
      validacao = true;

    if (validacao) {
      const dado_terreno = {
        ocupacao: terreno[0],
        relevo: terreno[1],
        uso: terreno[2],
        patrimonio: terreno[3],
        limite_testada: terreno[4],
        caracterizacao: terreno[5],
        tipo: terreno[6]
      };

      console.log(
        terreno[0] +
          "\n" +
          terreno[1] +
          "\n" +
          terreno[2] +
          "\n" +
          terreno[3] +
          "\n" +
          terreno[4] +
          "\n" +
          terreno[5] +
          "\n" +
          terreno[6]
      );

      await storeData(dado_terreno);
      navigate("ColetarEdificacao");
    } else{
      let array_validacao:String = "";
      
      terreno[0] ? <></> : array_validacao += "> Ocupação\n";
      terreno[1] ? <></> : array_validacao += "> Relevo\n";
      terreno[2] ? <></> : array_validacao += "> Uso\n";
      terreno[3] ? <></> : array_validacao += "> Patrimônio\n";
      terreno[4] ? <></> : array_validacao += "> Limite Testada\n";
      terreno[5] ? <></> : array_validacao += "> Caracterização\n";
      terreno[6] ? <></> : array_validacao += "> Tipo\n";

      alert("Dados incompletos! Favor preencher: \n" + array_validacao);
    }
  }

  return (
    <View>
      <Header estilo={0} titulo="Coletar Dados" />
      <View style={components.viewSubTitulo}>
        <Text style={components.textoSubTitulo}>Terreno</Text>
      </View>
      <ScrollView style={estilo.scrollview}>
        {telas.map((obj, key) => (
          <View style={estilo.viewItemTerreno} key={key}>
            <Text style={estilo.textItemTerreno}>{obj.nome}</Text>
            <RNPickerSelect
              placeholder={{}}
              useNativeAndroidPickerStyle={true}
              onValueChange={(value: string, key: number) => {
                let array_novo = [...terreno];
                array_novo[obj.dado] = parseInt(value);
                setTerreno(array_novo);
              }}
              items={obj.perguntas}
            />
          </View>
        ))}
        <View style={estilo.viewBotaoProximo}>
          <TouchableOpacity
            style={components.botaoProximo}
            onPress={handleNavigateToEdificacao}
          >
            <Text style={components.textBotaoProximo}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const telas = [
  {
    nome: "Ocupação",
    dado: 0,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Não construído", value: 1 },
      { label: "Ruínas", value: 2 },
      { label: "Em demolição", value: 3 },
      { label: "Construção paralisada", value: 4 },
      { label: "Construção andamento", value: 5 },
      { label: "Construído", value: 6 },
    ],
  },
  {
    nome: "Relevo",
    dado: 1,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Horizontal", value: 1 },
      { label: "Aclive", value: 2 },
      { label: "Aclive acentuado", value: 3 },
      { label: "Declive", value: 4 },
      { label: "Declive acentuado", value: 5 },
      { label: "Irregular", value: 6 },
    ],
  },
  {
    nome: "Uso",
    dado: 2,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Sem uso", value: 1 },
      { label: "Alugado", value: 2 },
      { label: "Cedido", value: 3 },
      { label: "Proprietário", value: 4 },
      { label: "Outro", value: 5 },
    ],
  },
  {
    nome: "Patrimônio",
    dado: 3,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Particular", value: 1 },
      { label: "Associativo", value: 2 },
      { label: "Religioso", value: 3 },
      { label: "União", value: 4 },
      { label: "Estado", value: 5 },
      { label: "Município", value: 5 },
    ],
  },
  {
    nome: "Limite testada",
    dado: 4,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Aberto", value: 1 },
      { label: "Cerca (arame)", value: 2 },
      { label: "Cerca (madeira)", value: 3 },
      { label: "Alambrado", value: 4 },
      { label: "Calçada", value: 5 },
      { label: "Muro", value: 6 },
    ],
  },
  {
    nome: "Caracterização",
    dado: 5,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Residencial", value: 1 },
      { label: "Comercial", value: 2 },
      { label: "Industrial", value: 3 },
      { label: "Serviços", value: 4 },
      { label: "Outros", value: 5 },
    ],
  },
  {
    nome: "Tipo",
    dado: 6,
    perguntas: [
      { label: "Selecionar", value: 0 },
      { label: "Assentamento Rural", value: 1 },
      { label: "Imóvel Rural", value: 2 },
      { label: "Imóvel Urbano", value: 3 }
    ],
  }
];
