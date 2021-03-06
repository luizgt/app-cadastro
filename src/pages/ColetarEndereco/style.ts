import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  container: { height: "100%" },
  textInput: {
    borderWidth: 0.3,
    height: 40,
    paddingLeft: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
  },
  viewSubTitulo: {
    marginLeft: 1,
    marginTop: 10,
    marginBottom: 30,
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderColor: "purple",
  },
  textoSubTitulo: {
    fontSize: 30,
    color: "purple",
  },
  viewTextInput: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: (Dimensions.get("window").height * 2) / 4,
  },
  viewBotaoProximo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 75,
  },
  botaoProximo: {
    backgroundColor: "#d200d5",
    width: 85,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textBotaoProximo: {
    color: "white",
    fontSize: 20,
  },
});

export default estilo;
