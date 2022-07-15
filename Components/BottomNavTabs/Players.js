import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default function Players() {
    return (
      <View style = {styles.container1}>
        <Text>
            
        </Text>
        <TextInput
                style={styles.input}
                placeholder="Email Address"
                
                onChangeText={text => setEmail(text)}

            />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#00001c',
        alignItems: 'center',
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center'
    },
    input: {
        marginTop: 20,
        paddingVertical: 12,
        width: 300,
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
   
})