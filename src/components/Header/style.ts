import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  tamanhoHeader: {
    marginTop: 0,
    width: "100%",
    height: (Dimensions.get("screen").height * 1) / 7,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  headerFundoBranco: {
    backgroundColor: "#f7f9fa",
    borderBottomColor: "#d8dfe6",
  },
  headerFundoRosa: {
    backgroundColor: "#ec7dea",
    borderBottomColor: "#f096ee",
  },
  headerFundoRoxo: {
    backgroundColor: "#c865e4",
    borderBottomColor: "#c865e4",
  },
  headerTextRosa: {
    fontSize: 40,
    color: "#d200d5",
    fontWeight: "bold",
  },
  headerTextBranco: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
});

export default estilo;
