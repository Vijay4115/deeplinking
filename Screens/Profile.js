import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Profile Screen </Text>
                <Button title="Go to Settings" onPress={()=>this.props.navigation.navigate("Settings")}/>
                <Button title="Go Back" onPress={()=>this.props.navigation.goBack()}/>
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
