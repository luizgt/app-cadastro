import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import Header from "../../components/Header";

import estilo from "./style";
import { useNavigation } from "@react-navigation/native";

export default function ColetarResidentes() {
  const [valor, setValor] = useState<number>(0);
  const [residentes, setResidentes] = useState<boolean>(false);

  const { navigate } = useNavigation();

  function handleNavigateToComunicacao() {
    navigate("ColetarComunicacao");
  }

  return (
    <View style={estilo.container}>
      <Header />
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
                <Text style={estilo.textPergunta}>{obj.dado}</Text>

                <View style={estilo.viewValores}>
                  <TouchableOpacity
                    onPress={() => {
                      obj.valor > 0 ? setValor(obj.valor--) : 0;
                    }}
                  >
                    <Text style={[estilo.textValores, estilo.vermelho]}>-</Text>
                  </TouchableOpacity>
                  <Text style={estilo.textValor}>{obj.valor}</Text>
                  <TouchableOpacity onPress={() => setValor(obj.valor++)}>
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
  { dado: "Mulheres", valor: 0 },
  { dado: "Homens", valor: 0 },
  { dado: "Outros gêneros", valor: 0 },
  { dado: "< 1 ano", valor: 0 },
  { dado: "1 a 3", valor: 0 },
  { dado: "4 a 5", valor: 0 },
  { dado: "6 a 9", valor: 0 },
  { dado: "10 a 15", valor: 0 },
  { dado: "16 a 21", valor: 0 },
  { dado: "22 a 45", valor: 0 },
  { dado: "45 a 60", valor: 0 },
  { dado: "> 60 anos", valor: 0 },
];
