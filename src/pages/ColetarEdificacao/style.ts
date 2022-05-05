import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
   marcadorSubTitulo:{
    marginLeft: "auto",
    marginRight: 20
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
  },

  viewBotaoProximo:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    height: 100
  }
});

export default estilo;
