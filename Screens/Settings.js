import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Settings Screen </Text>
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
