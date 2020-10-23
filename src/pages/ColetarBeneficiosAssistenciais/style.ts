import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  container: {
    height: (Dimensions.get("screen").height * 9) / 12,
  },

  viewSubTitulo: {
    marginLeft: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderColor: "purple",
    flexDirection: "row",
    alignItems: "center",
  },
  marcadorSubTitulo: {
    marginLeft: "auto",
    marginRight: 20,
  },
  textoSubTitulo: {
    fontSize: 30,
    color: "purple",
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
