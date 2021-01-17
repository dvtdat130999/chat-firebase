import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';

import ChatIcon from "../../assets/chat.png"
import {Ionicons} from "@expo/vector-icons";


const Login=(props)=> {

    const [name,setName]=useState("");
    const [username,setUsername]=useState(null);
    const [errorUsername,setErrorUsername]=useState(null);
    const changeContinue=()=>{
        props.navigation.navigate("Chat",{name:username})
    }
    useEffect(()=>{
        if(username!==null && username.length===0)
        {
            setErrorUsername("Username can't be empty");
        }
        if(username!==null && username.length>0)
        {
            setErrorUsername(null);
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.circle}></View>
            <View style={{marginTop:64}}>
                <Image src={ChatIcon} 
                        style={{width:100,height:100,alignSelf:'center'}}></Image>
            </View>
            <View style={{marginHorizontal:32}}>
                <Text style={styles.header}>Username</Text>
                <TextInput style={styles.input} 
                            onChangeText={username=>setUsername(username)}
                            value={username}/>
                {errorUsername!==null ?
                    <Text style={{color:"red"}}>{errorUsername}</Text>
                    :
                    <View/>
                }
                <View style={{alignItems:"flex-end",marginTop:44}}>
                    <TouchableOpacity style={styles.continue}
                                        onPress={changeContinue}
                    >
                        <Ionicons name="arrow-forward" size={24}color="#FFF"></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    
  },

  circle:{
      width:500,
      height:500,
      borderRadius:500/2,
      backgroundColor:"#FFF",
      position:"absolute",
      left:-120,
      top:-20
    },
    header:{
        fontWeight:"800",
        fontSize:30,
        color:"#514E5A",
        marginTop:32
    },
    input:{
        marginTop:32,
        height:50,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"#BAB7C3",
        borderRadius:30,
        paddingHorizontal:16,
        color:"#514E5A",
        fontWeight:"600"
    },
    continue:{
        width:50,
        height:50,
        borderRadius:50/2,
        backgroundColor:"#9075E3",
        alignItems:"center",
        justifyContent:"center"
    }
});

export default Login;