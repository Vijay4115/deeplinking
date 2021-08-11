import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Platform, Linking } from 'react-native'


const sendSms = () =>{

    if(Platform.OS === 'android')
    {
        Linking.openURL(`sms:${'+91123456789'}`)
    }
    else
    {
        Linking.openURL(`sms:${'+91123456789'}`)
    }
}
const sendCall = () =>{

    if(Platform.OS === 'android')
    {
        Linking.openURL(`tel:${'+91123456789'}`)
    }
    else
    {
        Linking.openURL(`telprompt:${'+91123456789'}`)
    }
}
const openUrl = () =>{

    if(Platform.OS === 'android')
    {
        Linking.openURL('https://www.google.com')
    }
    else
    {
        Linking.openURL('https://www.google.com')
    }
}
const sendMail = () =>{

    if(Platform.OS === 'android')
    {
        Linking.openURL(`mailto:abc@gmail.com`)
    }
    else
    {
        Linking.openURL(`mailto:abc@gmail.com`)
    }
}
export default class Home extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text> Home Screen </Text>
                <Button title="Go to Profile" onPress={()=>this.props.navigation.navigate("Profile")}/>

            <Button title="send Sms" onPress={()=>sendSms()}/>
            <Button title="Open phone And send Call" onPress={()=>sendCall()}/>
            <Button title="Open URL" onPress={()=>openUrl()}/>
            <Button title="Open Mail and compose" onPress={()=>sendMail()}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:150,
        alignItems:'center',
    }
})
