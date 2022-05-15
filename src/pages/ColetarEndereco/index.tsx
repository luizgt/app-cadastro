import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";
import { Camera } from "expo-camera";

import { Feather } from '@expo/vector-icons'; 

import cidades from "./cidades";

import Header from "../../components/Header";

import estilo from "./style";
import components from "../../styles/components";
import { ImageBackground } from "react-native";

export default function ColetarEndereco() {
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("Adamantina");

  //variaveis para usar camera
  const [camera, setCamera] = useState<any>(null);
  const [foto, setFoto] = useState<any>(null);
  const [preview, setPreview] = useState(false);
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraAberta, setCameraAberta] = useState(false);

  const { navigate } = useNavigation();

  async function handleNavigateToEdificacao() {
    const endereco = {
      rua: rua,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
    };
    
    await storeData(endereco);
    navigate("ColetarTerreno");
  }

  const storeData = async (value: Object) => {
    try {
      const valueJSON = JSON.stringify(value);
      await AsyncStorage.setItem("endereco_atual", valueJSON);
      //console.log("Enredeço salvo:" + JSON.stringify(value));
    } catch (e) {
      console.log("Erro ao salvar endereço.");
    }
  };

  return (
    <View>
      {cameraAberta === false ? abrirViewPrincipal() : abrirCamera()}
    </View>
  );

  function abrirCamera() {
    return (
      <Camera
        style={estilo.viewCamera}
        type={type}
        ref={(ref) => {
          setCamera(ref);
        }}
      >
        <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 25, marginTop: "auto"}}>
          <View style={{backgroundColor: "white", borderRadius: 50, opacity: 0.4, marginLeft: 15, marginRight: "auto"}}>
            <TouchableOpacity onPress={() => setCameraAberta(false)}>
              <Feather name="x" size={60} color="white" style={{opacity: 0.75}} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => tirarFoto()} style={{marginRight: 15}}>
            <View style={estilo.divBotaoCamera1}>
              <View style={estilo.divBotaoCamera2}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    );

    async function tirarFoto() {
      if (!camera) return;
      const foto_aux: any = await camera.takePictureAsync();
      setCameraAberta(false);
      setPreview(true);
      setFoto(foto_aux);
    }
  }

  function abrirViewPrincipal(){
    return (
      <View style={estilo.container}>
        <Header estilo={0} titulo="Coletar Dados" />
        <ScrollView>
          <View>
            <View style={components.viewSubTitulo}>
              <Text style={components.textoSubTitulo}>Endereço</Text>
            </View>
            <View style={estilo.viewTextInput}>
              <TextInput
                style={estilo.textInput}
                placeholder="Rua"
                onChangeText={(text) => setRua(text)}
              />
              <TextInput
                style={estilo.textInput}
                keyboardType="number-pad"
                placeholder="Número"
                onChangeText={(text) => setNumero(text)}
                />
              <TextInput
                style={estilo.textInput}
                placeholder="Complemento"
                onChangeText={(text) => setComplemento(text)}
              />
              <TextInput
                style={estilo.textInput}
                placeholder="Bairro"
                onChangeText={(text) => setBairro(text)}
                />

              <Text style={estilo.textItemCidade}>Cidade</Text>
              <RNPickerSelect
                placeholder={{}}
                useNativeAndroidPickerStyle={true}
                onValueChange={(value: number, key: number) => {
                  let cidade_novo = cidades[value].label;

                  console.log(cidade_novo);
                  setCidade(cidade_novo);
                }}
                items={cidades}
              />
            </View>
          </View>
          <View style={estilo.viewFoto}>
            <View style={estilo.viewIconeFoto}>
              <TouchableOpacity onPress={() => setCameraAberta(true)}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                  <Feather name="camera" size={50} color="black" />
                  <Text>Tirar foto</Text>
                </View>
              </TouchableOpacity>
            </View>
            {preview && foto ? <ImageBackground style={estilo.foto} source={{uri: foto.uri}}/> : <></>}
          </View>

          <View style={estilo.viewBotaoProximo}>
            <TouchableOpacity
              style={components.botaoProximo}
              onPress={handleNavigateToEdificacao}
              >
              <Text style={components.textBotaoProximo}>Próximo</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    );
  }
}
