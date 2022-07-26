import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Players() {
  return (
    <View style={styles.container1}>
      <View style = {{flexDirection: 'row',  alignItems: 'center',}}>
        <TextInput
          style={styles.input}
          placeholder="Search Player"

          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity onPress={null}>
                <Text style={{marginLeft:10, color: '#94a274', fontWeight: "bold" }} >Search</Text>
        </TouchableOpacity>
      </View>
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
    paddingVertical: 12,
    width: 300,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },

})