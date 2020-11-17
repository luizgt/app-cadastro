import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  
  cardColeta:{
    width: "100%",
  },

  headerCard:{
    alignItems: "center",
    borderBottomColor: "white",
    borderStyle: "solid",
    borderBottomWidth: 2,
    marginBottom: 10
  },

  headerTextCard:{
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },

  viewCardColeta:{
    padding: 5,
    margin: 10,
    backgroundColor: "#463b88",
    borderRadius: 5,
    marginBottom: 5
  },

  textCard:{
    color: "white",
    fontWeight: "bold",
    fontSize: 17
  },

  viewBotoes:{
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  botaoExcluir:{
    backgroundColor: "red",
    padding: 10,
    borderRadius: 3
  },

  textoExcluir:{
    fontWeight: "bold",
    fontSize: 15
  },

  botaoSalvar:{
    backgroundColor: "white",
    padding: 10,
    borderRadius: 3
  },

  textoSalvar:{
    fontWeight: "bold",
    fontSize: 15
  }

});

export default estilo;
