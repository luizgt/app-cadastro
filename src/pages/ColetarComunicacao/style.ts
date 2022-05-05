import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  container: {
    height: (Dimensions.get("screen").height * 9) / 12,
  },
  marcadorSubTitulo: {
    marginLeft: "auto",
    marginRight: 20,
  },

  viewLinhaPergunta: {
    alignContent: "center",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 20,
  },
  textLinhaPergunta: {
    fontSize: 25,
  },
  
  viewBotaoProximo: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  }
});

export default estilo;
