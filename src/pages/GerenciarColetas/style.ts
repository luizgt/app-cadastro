import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  
  cardColeta:{
    width: "90%",
    padding: 5,
    backgroundColor: "#463b88",
    borderRadius: 5,
    marginBottom: 5
  },

  textCard:{
    color: "white",
    fontWeight: "bold"
  }
});

export default estilo;
