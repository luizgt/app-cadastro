import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import Header from "../../components/Header";

import estilo from "./style";

export default function ColetarEducacao() {
  const [valor, setValor] = useState<number>(0);
  const [educacao, setEducacao] = useState<boolean>(false);

  return (
    <View style={estilo.container}>
      <Header />
      <View>
        <View style={estilo.viewSubTitulo}>
          <Text style={estilo.textoSubTitulo}>Educação</Text>
          <CheckBox
            disabled={false}
            value={educacao}
            onValueChange={(newValue) => setEducacao(newValue)}
            style={estilo.marcadorSubTitulo}
          />
        </View>
        <ScrollView>
          {educacao === false ? (
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
        </ScrollView>
      </View>
    </View>
  );
}

const dados = [
  { dado: "Analfabetos", valor: 0 },
  { dado: "Creche", valor: 0 },
  { dado: "Pré pública", valor: 0 },
  { dado: "Pré particular", valor: 0 },
  { dado: "Fund. público", valor: 0 },
  { dado: "Fund. particular", valor: 0 },
  { dado: "Médio público", valor: 0 },
  { dado: "Médio particular", valor: 0 },
  { dado: "Sup. público", valor: 0 },
  { dado: "Sup. particular", valor: 0 },
];
