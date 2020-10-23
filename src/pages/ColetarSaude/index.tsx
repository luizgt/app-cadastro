import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import Header from "../../components/Header";

import estilo from "./style";

export default function ColetarEducacao() {
  const [valor, setValor] = useState<number>(0);
  const [saude, setSaude] = useState<boolean>(false);
 
  return (
    <View style={estilo.container}>
      <Header />
      <View>
        <View style={estilo.viewSubTitulo}>
          <Text style={estilo.textoSubTitulo}>Socioeconômicos</Text>
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
  { dado: "Cardiopatia", valor: 0 },
  { dado: "Câncer", valor: 0 },
  { dado: "Def. auditiva", valor: 0 },
  { dado: "Def. física", valor: 0 },
  { dado: "Def. mental", valor: 0 },
  { dado: "Dengue", valor: 0 },
  { dado: "Dep. Química", valor: 0 },
  { dado: "Depressão", valor: 0 },
  { dado: "Dist. linguagem", valor: 0 },
  { dado: "Fibromialgia", valor: 0 },
  { dado: "Hanseníase", valor: 0 },
  { dado: "Hipertensão", valor: 0 },
  { dado: "Mal de Parkinson", valor: 0 },
  { dado: "Tuberculose", valor: 0 },
  { dado: "AIDS", valor: 0 },
];