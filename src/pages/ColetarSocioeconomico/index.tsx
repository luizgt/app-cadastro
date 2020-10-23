import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import Header from "../../components/Header";

import estilo from "./style";
import { useNavigation } from "@react-navigation/native";

export default function ColetarEducacao() {
  const [valor, setValor] = useState<number>(0);
  const [socioeconomicos, setSocioeconomicos] = useState<boolean>(false);

  const { navigate } = useNavigation();
  function handleNavigateSaude() {
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
  { dado: "Aposentados", valor: 0 },
  { dado: "Pensionistas", valor: 0 },
  { dado: "Desempregados", valor: 0 },
  { dado: "Emp. no Comércio", valor: 0 },
  { dado: "Emp. na Indústria", valor: 0 },
  { dado: "Emp. em Serviço", valor: 0 },
  { dado: "Emp. Rurais", valor: 0 },
  { dado: "Emp. Setor Público", valor: 0 },
  { dado: "Autônomo", valor: 0 },
  { dado: "Emp. Informal", valor: 0 },
  { dado: "Veículos Local", valor: 0 },
  { dado: "Veículos Fora", valor: 0 },
];
