import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./src/components/Header";
import ColetarEndereco from "./src/pages/ColetarEndereco";
import ColetarTerreno from "./src/pages/ColetarTerreno";
import ColetarEdificacao from "./src/pages/ColetarEdificacao";
import ColetarResidentes from "./src/pages/ColetarResidentes";

export default function App() {
  return (
    <View style={styles.container}>
      <ColetarResidentes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
