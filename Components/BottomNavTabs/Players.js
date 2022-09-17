import React, {useState,useEffect, Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image, NativeEventEmitter } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function Clubs() { 
  const [clubs,setClubs]=useState([]);
  const [name, setName] = useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    // Update the document title using the browser API
   fetchData();
  });

  const fetchData=()=>{
    let url = 'https://api.statorium.com/api/v1/standings/143?apikey=f41c2d8c8377a90c5d1708a22851eefb'
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('JSON', json)
        let EasternConference = json.season.groups[0].standings;
        let WesternConference = json.season.groups[1].standings;
        const combinedStandings = [...EasternConference,...WesternConference]
        setClubs(combinedStandings)
        
      })
      .catch((error) => {
        console.error(error);
        setClubs([])
      })
  }

  const renderItemView=({item})=> {
   
    return (
      <TouchableOpacity style={{flexDirection: 'row', marginHorizontal:10, marginVertical:5, borderRadius:10, borderColor: '#94a274', borderWidth: 1, padding:10 }}
      onPress={null}
      >
        <Image source={{uri: item.logo}} style={{width: 50,height: 50}}/>
        <Text style={{color: '#fff', padding: 10,textAlign: 'left', fontWeight:'bold' }}>{item.teamName}</Text>
      </TouchableOpacity>
    );
  };

  const alphabeticalSort=()=>{
    const newData = clubs.sort((a,b)=> {
      if(a.teamName.toLowerCase() < b.teamName.toLowerCase()) return -1;
      if (a.teamName.toLowerCase() > b.teamName.toLowerCase()) return 1;
      return 0;
    });
    setClubs(newData);
    setLoading(!loading);
  }
  
  const searchArray = clubs.filter(item=>  {
    if(name === '') return item;
    if (item.teamName.includes(name)) return item;
  })
  

    return (
        <SafeAreaView style={styles.container} >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,backgroundColor: '#94a274', marginBottom:10 }}>
            <View>
              <Ionicons name='md-search' size={25} color='black'  />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Search Player"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => alphabeticalSort()} style={styles.btn}>
            <Text style={styles.bold}>Sort Alphabetically</Text>
          </TouchableOpacity>
          </View>

        
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

  export default Clubs;



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
    backgroundColor: '#94a274',
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