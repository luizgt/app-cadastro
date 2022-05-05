import { StyleSheet, Platform, Dimensions } from "react-native";

const components = StyleSheet.create({
    viewSubTitulo: {
        marginLeft: 1,
        marginTop: 10,
        marginBottom: 15,
        paddingLeft: 15,
        borderLeftWidth: 3,
        borderColor: "#016394",
        
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    textoSubTitulo: {
        fontSize: 30,
        color: "#016394",
    },
    botaoProximo: {
        backgroundColor: "#016394",
        width: 100,
        height: 40,
        borderRadius: 5,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
      },
      textBotaoProximo: {
        color: "white",
        fontSize: 20,
    },
});

export default components;
