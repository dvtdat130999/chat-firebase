import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,Platform,KeyboardAvoidingView,SafeAreaView } from 'react-native';

import {GiftedChat} from "react-native-gifted-chat";
import Fire from "../../Fire";
export default class Chat extends React.Component{
    state={
        messages:[]
    };

    get user()
    {
        return{
            _id:Fire.uid,
            name:this.props.navigation.state.params.name

        }
    }

    componentDidMount()
    {
        
        Fire.get(message=>this.setState(previous=>({
            messages:GiftedChat.append(previous.messages,message)
        })));
    }
    componentWillUnmount()
    {
        Fire.off();
    }
    render(){
        const chat=<GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user}/>
        if(Platform.OS==="android")
        {
            return (
                
                <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            )
        }
        return (
            <SafeAreaView style={{flex:1}}>
                {chat}
       
            </SafeAreaView>
        );
    }
}


// const Chat=(props) =>{


//     const [messages,setMessages]=useState([]);
//     const [user,setUser]=useState({
//         _id:Fire.uid,
//         name:props.navigation.state.params.name
//     });
    
    
    
//     useEffect(()=>{
//         Fire.get(message=>{
//             setMessages(GiftedChat.append(messages,message))
//         });
//         return ()=>{
//             Fire.off();
//         }
//     })

//     const chat=<GiftedChat messages={messages} onSend={Fire.send} user={user}/>;

//     if(Platform.OS==="android")
//     {
//         return (
            
//             <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
//                 {chat}
//             </KeyboardAvoidingView>
//         )
//     }
//     return (
//         <SafeAreaView style={{flex:1}}>
//             {chat}
   
//         </SafeAreaView>
//     );

   
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default Chat;