// import React from "react";
// import {
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   View,
//   Image,
//   TouchableOpacity,
//   Text
// } from "react-native";

// export default class PlayerList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       refreshing: true,
//     }
//   }

//   componentDidMount() {
//     this.fetchCats();
//   }

//   fetchCats() {
//     this.setState({ refreshing: true });
//     fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
//       .then(res => res.json())
//       .then(resJson => {
//         this.setState({ data: resJson });
//         this.setState({ refreshing: false });
//       }).catch(e => console.log(e));
//   }

//   renderItemComponent = (data) =>
//     <TouchableOpacity style={styles.container}>
//       <View style = {{borderRadius:20,height:50, width:50}}>
//       <Image style={styles.image} source={{ uri: data.item.url }} />
//       </View>
//       <View>
//         <Text style = {{color:'white', paddingHorizontal:5}}> HDJDJDJ</Text>
//       </View>
//       <View style={styles.verticleLine}></View>
//       <View>
//         <Text style = {{color:'white', paddingHorizontal:5}}> HDJDJDJ</Text>
//       </View>
//       <View style={styles.verticleLine}></View>
//       <View>
//         <Text style = {{color:'white', paddingHorizontal:5}}> HDJDJDJ</Text>
//       </View>

      
//     </TouchableOpacity>

//   ItemSeparator = () => <View style={{
//     height: 2,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     marginLeft: 10,
//     marginRight: 10,
//   }}
//   />

//   handleRefresh = () => {
//     this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
//   }

//   render() {
//     return (
//       <SafeAreaView>
//         <FlatList
//           data={this.state.data}
//           renderItem={item => this.renderItemComponent(item)}
//           keyExtractor={item => item.id.toString()}
//           ItemSeparatorComponent={this.ItemSeparator}
//           refreshing={this.state.refreshing}
//           onRefresh={this.handleRefresh}
//         />
//       </SafeAreaView>)
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 90,
//     padding:10,
//     margin: 10,
//     backgroundColor: '#94a274',
//     borderRadius: 6,
//     flexDirection: "row",
//     alignItems: 'center',
//   },
 
//   image: {
//     height: '100%',
//     borderRadius: 4,
//   },
//   verticleLine: {
//     height: '60%',
//     width: 2,
//     backgroundColor: '#00001c',
//   }
// });

import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Players from './BottomNavTabs/Players'


export default function PlayerList() {

  return (
    <FlatList
		data={results}
    keyExtractor={item => players.playerID}
		renderItem={({ item }) => (
		    <TouchableOpacity style={styles.container}>
      <View style = {{borderRadius:20,height:50, width:50}}>
      <Image style={styles.image} source={{uri: Players.photo}} />
      </View>
      <View>
        <Text style = {{color:'white', paddingHorizontal:5}}> HDJDJDJ</Text>
      </View>
      <View style={styles.verticleLine}></View>
      <View>
        <Text style = {{color:'white', paddingHorizontal:5}}> HDJDJDJ</Text>
      </View>
      <View style={styles.verticleLine}></View>
      <View>
        <Text style = {{color:'white', paddingHorizontal:5}}> HDJDJDJ</Text>
      </View>
    </TouchableOpacity>
		)}
		
	/>
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