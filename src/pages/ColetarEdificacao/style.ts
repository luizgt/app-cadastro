import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  viewSubTitulo: {
    marginLeft: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderColor: "purple",
    flexDirection: "row",
    alignItems: "center"
  },
  textoSubTitulo: {
    fontSize: 30,
    color: "purple",
  },
  marcadorSubTitulo:{
    marginLeft: "auto",
    marginRight: 20,
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
  },

  viewSemEdificacao:{
    justifyContent: "center",
    alignItems:"center",
    height: Dimensions.get("window").height * 1/2,
  },
  textSemEdificacao:{
    fontSize: 35
  }
});

export default estilo;
