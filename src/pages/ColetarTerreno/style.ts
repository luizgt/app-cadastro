import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  viewSubTitulo: {
    marginLeft: 1,
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderColor: "purple",
  },
  textoSubTitulo: {
    fontSize: 30,
    color: "purple",
  },
  viewItemTerreno: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
  textItemTerreno:{
      fontSize: 20,
  },
  scrollview:{
    marginBottom: 160,
  }
});

export default estilo;
