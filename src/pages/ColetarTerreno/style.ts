import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  textoSubTitulo: {
    fontSize: 30,
    color: "purple",
  },
  viewItemTerreno: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
  textItemTerreno: {
    fontSize: 20,
  },
  scrollview: {
    marginBottom: 160,
  },

  viewBotaoProximo:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    height: 100
  }
});

export default estilo;
