import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
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
  viewBotaoProximo:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
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
