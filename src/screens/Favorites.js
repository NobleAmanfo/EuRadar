import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, Text, View, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { clubsUrl } from '../utils/constants';
import * as wpActions from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Favorites({ navigation }) {
  const clubData = useSelector((state) => state.appData.clubData);
  const dispatch = useDispatch();


  const MarkFavorite=(code)=>{
    dispatch(wpActions.updateClubData(code));
  }

  const renderItemView = ({ item }) => {
    console.log(item)
    return (
      item.show ?
      <View style={{ flexDirection: 'row', width: '95%' }} key={item.teamID}>
        <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, borderRadius: 10, borderColor: '#94a274', borderWidth: 1, padding: 10, width: '90%' }}
          onPress={() => navigation.navigate('ClubDetails', { details: item, standings: item.options })}
        >
          <View style={{ width: '20%' }}>
            <Image source={{ uri: item.logo }} style={{ width: 50, height: 50 }} />
          </View>
          <View style={{ width: '80%', justifyContent: 'center', }}>
            <Text style={{ color: '#fff', textAlign: 'left', fontWeight: 'bold', fontSize: 15 }}>{item.teamName}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ width: '10%', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => MarkFavorite(item.teamID)}
            style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Ionicons name={item.show ? 'star' : 'star-outline'} size={26} color={'white'} />
          </TouchableOpacity>
        </View>
      </View> : null
    );
  };
    return (
      <>
      <SafeAreaView style={styles.container}>
        <View style = {{ alignItems: 'center', marginBottom:20}}>
          <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Favorites
          </Text>
        </View>
         <FlatList
        data={clubData}
        renderItem={item => renderItemView(item)}
        ListEmptyComponent={() => (
          <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', }}>
            Nothing to show
          </Text>
        )
        }
      />
      </SafeAreaView>
      </>
    )
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00001c',
      
      flex: 1,
      
      justifyContent: 'center',
  
    },
  
  })
  
  

