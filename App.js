import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text,Modal,TouchableHighlight, View, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function App() {

  const image = require("./resources/bg.jpg");
  console.disableYellowBox=true;
  const [tarefas, setarTarefas] = useState([
    {
    id:1,
    tarefa:'Minha tarefa 1'
  },
  {
    id:2,
    tarefa:'Minha tarefa 2'
  },
  {
    id:3,
    tarefa:'Minha tarefa 3'
  }
]);

 const [modal,setModal]=useState(true);

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  function deletarTarefa(id){
    alert('Tarefa foi deletado com sucesso!')
    let newTarefas=tarefas.filter(function(val){
      return val.id!=id;
    });
    setarTarefas(newTarefas);
  }

  return (
    <ScrollView style={{flex:1}}>
      <StatusBar hidden/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
         
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput autoFocus={true}></TextInput>
            <TouchableHighlight
              style={{...styles.openButton,backgroundColor:'#2196F3'}}
              onPress={() => {
                setModal(!modal);
              }}>
            <Text style={styles.textStyle}>Adicionar Tarefa</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

        <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de Tarefas</Text>
          </View>
        </ImageBackground>
        {
          tarefas.map(function(val){
        return(<View style={styles.tarefaSingle}>
          <View style={{flex:1,width:'100%',padding:10}}>
            <Text>{val.tarefa}</Text>
          </View>
          <View style={{alignItems:'flex-end',flex:1, padding:10}}>
            <TouchableOpacity onPress={()=>deletarTarefa(val.id)}>
              <Ionicons name="trash-outline" size={24} color="black" />
              </TouchableOpacity>
          </View>
        </View>);
})
}
<TouchableOpacity style={styles.btnAddTarefa} onPress={()=>setModal(true)}><Text
         style={{textAlign:'center',color:'white'}}>Adicionar Tarefa!
         </Text>
         </TouchableOpacity>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  image: {
    width:'100%',
    height:90,
    resizeMode:"cover",
  },
  btnAddTarefa:{
    width:200,
    padding:8,
    backgroundColor:'gray',
    marginTop:20,
    marginLeft:20,
  },
  coverView:{
    width:'100%',
    height:90,
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  textHeader:{
    textAlign:'center',
    color:'white',
    fontSize:20,
    marginTop:30,
    fontFamily: 'Lato_400Regular',
  },
  tarefaSingle:{
    marginTop:30,
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'black',
    flexDirection:'row',
    paddingBottom:10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
