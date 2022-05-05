import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  container: {
    height: (Dimensions.get("screen").height * 9) / 12,
  },

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
  marcadorSubTitulo: {
    marginLeft: "auto",
    marginRight: 20,
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

  viewSemResidentes:{
    justifyContent: "center",
    alignItems:"center",
    height: Dimensions.get("window").height * 1/2,
  },
  textSemResidentes:{
    fontSize: 35
  },

  viewBotaoProximo:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    height: 100
  }

  //   scrollview: {
  //     flex: 1
  //   },
});

export default estilo;
