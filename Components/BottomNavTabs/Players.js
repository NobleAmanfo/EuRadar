import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Players() {
    return (
      <View style = {styles.container1}>
        <Text> Players Tab </Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#00001c',
        alignItems: 'center',
        flex: 1,
        borderRadius: 20
    },
   
})