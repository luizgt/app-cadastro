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
  viewTextInput: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: (Dimensions.get("window").height * 2) / 4,
  },
  textItemCidade: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: -35
  },
  viewBotaoProximo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 75,
  }
});

export default estilo;
