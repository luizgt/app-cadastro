import { StyleSheet, Platform, Dimensions } from "react-native";

const estilo = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  containerImagem: {
    width: "100%",
    height: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container_botoes: {
    height: "55%",
    justifyContent: "center",
    alignItems: "center",
  },

  largura_botoes:{
    width: "60%",
    alignItems: "center"
  },

  botao_comecar:{
    borderRadius: 5,
    backgroundColor: "#d200d5",
    padding: 15,
  },

  botao_visualizar:{
    borderRadius: 5,
    backgroundColor: "#5852fa",
    padding: 15,
  },

  text_botao:{
    fontWeight: "bold",
    color: "white",
    fontSize: 20
  },

  margin_top20:{
      marginTop: 20
  }
});

export default estilo;
