import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import ColetarEndereco from "../pages/ColetarEndereco";
import ColetarTerreno from "../pages/ColetarTerreno";
import ColetarEdificacao from "../pages/ColetarEdificacao";
import ColetarResidentes from "../pages/ColetarResidentes";
import ColetarEducacao from "../pages/ColetarEducacao";
import ColetarBeneficiosAssistenciais from "../pages/ColetarBeneficiosAssistenciais";
import ColetarSocioeconomico from "../pages/ColetarSocioeconomico";
import ColetarSaude from "../pages/ColetarSaude";
import ColetarComunicacao from "../pages/ColetarComunicacao";
import GerenciarColetas from "../pages/GerenciarColetas";

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home}/>
        <Screen name="GerenciarColetas" component={GerenciarColetas}/>
        <Screen name="ColetarEndereco" component={ColetarEndereco} />
        <Screen name="ColetarTerreno" component={ColetarTerreno} />
        <Screen name="ColetarEdificacao" component={ColetarEdificacao} />
        <Screen name="ColetarResidentes" component={ColetarResidentes} />
        <Screen name="ColetarEducacao" component={ColetarEducacao} />
        <Screen name="ColetarBeneficiosAssistenciais" component={ColetarBeneficiosAssistenciais} />
        <Screen name="ColetarSocioeconomico" component={ColetarSocioeconomico} />
        <Screen name="ColetarSaude" component={ColetarSaude} />
        <Screen name="ColetarComunicacao" component={ColetarComunicacao} />
      </Navigator>
    </NavigationContainer>
  );
}
