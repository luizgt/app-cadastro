import React, { useState } from "react";
import { Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import estilo from "./style";
import Header from "../../components/Header";
import { render } from "react-dom";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function ColetarBeneficiosAssistenciais() {
  const [marcador0, setMarcador0] = useState(false);
  const [marcador1, setMarcador1] = useState(false);
  const [marcador2, setMarcador2] = useState(false);
  const [marcador3, setMarcador3] = useState(false);
  const [marcador4, setMarcador4] = useState(false);

  const dados = [
    { dado: "Ação Jovem", checked: false },
    { dado: "Bolsa Família", checked: false },
    { dado: "BPC", checked: false },
    { dado: "Renda Cidadã", checked: false },
    { dado: "Viva Leite", checked: false },
  ];

  const { navigate } = useNavigation();
  function handleNavigateToSocioeconomicos() {
    navigate("ColetarSocioeconomico");
  }

  return (
    <View style={estilo.container}>
      <Header />
      <View>
        <View style={estilo.viewSubTitulo}>
          <Text style={estilo.textoSubTitulo}>Benefícios Assistenciais</Text>
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

          <View style={estilo.viewLinhaPergunta}>
            <Text style={estilo.textLinhaPergunta}>{dados[2].dado}</Text>
            <CheckBox
              value={marcador2}
              onValueChange={(newValue) => {
                setMarcador2(newValue);
                dados[2].checked = newValue;
              }}
              style={estilo.marcadorSubTitulo}
            />
          </View>

          <View style={estilo.viewLinhaPergunta}>
            <Text style={estilo.textLinhaPergunta}>{dados[3].dado}</Text>
            <CheckBox
              value={marcador3}
              onValueChange={(newValue) => {
                setMarcador3(newValue);
                dados[3].checked = newValue;
              }}
              style={estilo.marcadorSubTitulo}
            />
          </View>

          <View style={estilo.viewLinhaPergunta}>
            <Text style={estilo.textLinhaPergunta}>{dados[4].dado}</Text>
            <CheckBox
              value={marcador4}
              onValueChange={(newValue) => {
                setMarcador4(newValue);
                dados[4].checked = newValue;
              }}
              style={estilo.marcadorSubTitulo}
            />
          </View>

          <View style={estilo.viewBotaoProximo}>
            <TouchableOpacity
              style={estilo.botaoProximo}
              onPress={handleNavigateToSocioeconomicos}
            >
              <Text style={estilo.textBotaoProximo}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
