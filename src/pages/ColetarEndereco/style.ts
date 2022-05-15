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
    marginBottom: -40,
  },
  viewFoto:{
    width: Dimensions.get("window").width,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  viewIconeFoto:{
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  viewBotaoProximo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  foto: {
    width: 100,
    height: 175,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: 35,
  },

  viewCamera:{
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },

  divBotaoCamera1: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "white",
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divBotaoCamera2: {
    borderRadius: 50,
    borderColor: "white",
    height: 50,
    width: 50,
    backgroundColor: "white",
  },
  
});

export default estilo;
