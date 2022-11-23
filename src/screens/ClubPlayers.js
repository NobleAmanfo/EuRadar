import React, {useState,useEffect, Component } from 'react'
import {FlatList, SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { map } from '@firebase/util';
import { clubPLayesUrl } from '../utils/constants';


function ClubPlayers({navigation}) {
  const [players,setPlayers]=useState([]);
  const [name, setName] = useState('');
  const [loading,setLoading]=useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
   fetchData();
  }, []);

  const fetchData=()=>{
    let url = clubPLayesUrl
    fetch(url)
    .then(response=>response.json())
    .then(responseJson=> {
      const arr = responseJson.season.players;
      const arr1 = arr.sort((a,b) => a.fullname > b.fullname ? 1 : -1)
      setPlayers(arr);

    }
    )
      .catch((error) => {
        console.error(error);
        setPlayers([])
      })
  }
  

  const renderItemView=({item})=> {
   const photoURL = item.photo.length != 0 ? item.photo : 'https://cdn-icons-png.flaticon.com/512/77/77305.png';
    return (
      <TouchableOpacity style={{flexDirection: 'row', marginHorizontal:10, marginVertical:5, borderRadius:10, borderColor: '#94a274', borderWidth: 1, padding:10 }}
      onPress={()=> navigation.navigate('PlayerDetails',{details: item})} 
      >
        <Image source={{uri: item.photo ? item.photo : 'https://cdn-icons-png.flaticon.com/512/77/77305.png'}} style={{width: 50,height: 50}}/>
        <View>
        <Text style={{fontSize: 20, color: '#fff', paddingLeft:10, paddingTop:8, paddingBottom:5, textAlign: 'left', fontWeight:'bold' }}>{item.fullname}</Text>
        <Text style={{fontSize: 12, color: '#fff', paddingLeft: 10,textAlign: 'left', fontWeight:'bold'}}>{item.teamname}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // const alphabeticalSort=()=>{
  //   if(toggle) {
  //   const newData = players.sort((a,b)=> {
  //     if(a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
  //     if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
  //     return 0;
  //   });
  //   setPlayers(newData);
  //   setLoading(!loading);
  //   } else {
  //   fetchData();
  //   }
  // }

  const searchArray = players && players.filter(item=>  {
    if(name === '') return item;
    if (item.fullname.toLowerCase().includes(name.toLowerCase())) return item;
  })

    return (
        <SafeAreaView style={styles.container} >
          <View style = {{alignItems: 'center',}}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 10,backgroundColor: '#94a274', marginBottom:10, width: '80%' }}>
            <View>
              <Ionicons name='md-search' size={25} color='black'  />
            </View>
            <TextInput

              style={styles.input}
              placeholder="Search Player"
              placeholderTextColor='white'
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          </View>
          {/* <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() =>{
            setToggle(!toggle);alphabeticalSort()
          }} style={styles.btn}>
            <Text style={styles.bold}>{toggle ? 'Sort Alphabetically' : 'Back to Previous Listing' }</Text>
          </TouchableOpacity>
          </View>
         */}

        
        <FlatList
          data={searchArray}
          renderItem={item => renderItemView(item)}
          ListEmptyComponent={() => (
            <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', }}>
              Nothing to show
            </Text>
          )
          }
        />
      </SafeAreaView>

    )
  }

  export default ClubPlayers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00001c',
    padding: 20,
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center'
  },
  input: {
    paddingVertical: 12,
    width: 270,
    backgroundColor: '',
    borderRadius: 10,
    paddingLeft:10
  },
  listing:{
    flexDirection: 'row',
    marginVertical: 10, 
    
  },
  btn:{
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#94a274',
    margin: 20,
    borderRadius: 10,
  },

})