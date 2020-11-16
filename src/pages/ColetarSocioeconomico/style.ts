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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  textPergunta: {
    fontSize: 25,
    marginLeft: 15,
  },
  viewValores: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: 20,
    alignItems: "center",
  },
  textValor: {
    fontSize: 30,
    marginLeft: 25,
    marginRight: 25,
  },
  textValores: {
    fontSize: 35,
    fontWeight: "bold",
  },

  vermelho: {
    color: "red",
  },
  azul: {
    color: "#3d76dd",
  },

  viewSemResidentes: {
    justifyContent: "center",
    alignItems: "center",
    height: (Dimensions.get("window").height * 1) / 2,
  },
  textSemResidentes: {
    fontSize: 35,
  },

  viewBotaoProximo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    height: 100,
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

  //   scrollview: {
  //     flex: 1
  //   },
});

export default estilo;
