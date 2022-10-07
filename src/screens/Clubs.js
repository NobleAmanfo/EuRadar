import React, {useState,useEffect } from 'react'
import {SafeAreaView, FlatList, Text, View, StyleSheet, TextInput, TouchableOpacity, Image,} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { clubsUrl } from '../utils/constants';

function Clubs({navigation}) { 
  const [clubs,setClubs]=useState([]);
  const [name, setName] = useState('');
  const [loading,setLoading]=useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
   fetchData();
  },[]);

  const fetchData=()=>{
    let url = clubsUrl
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('JSON', json)
        let easternConference = json.season.groups[0].standings;
        let westernConference = json.season.groups[1].standings;
        const combinedStandings = [...easternConference,...westernConference]
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
      onPress={()=> navigation.navigate('ClubDetails',{details: item})}
      >
        <Image source={{uri: item.logo}} style={{width: 50,height: 50}}/>
        <Text style={{color: '#fff', padding: 10,textAlign: 'left', fontWeight:'bold' }}>{item.teamName}</Text>
      </TouchableOpacity>
    );
  };


  const alphabeticalSort=()=>{
    if(toggle) {
    const newData = clubs.sort((a,b)=> {
      if(a.teamName.toLowerCase() < b.teamName.toLowerCase()) return -1;
      if (a.teamName.toLowerCase() > b.teamName.toLowerCase()) return 1;
      return 0;
    });
    setClubs(newData);
    setLoading(!loading);
    } else {
      fetchData();
    }  
  }
  console.log(clubs)
  
  const searchArray = clubs.filter(item=>  {
    if(name === '') return item;
    if (item.teamName.toLowerCase().includes(name.toLowerCase())) return item;
  })
  
  

    return (
        <SafeAreaView style={styles.container} >
          <View style = {{alignItems: 'center',}}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,backgroundColor: '#94a274', width: '80%'  }}>
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
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() =>{
            setToggle(!toggle);alphabeticalSort()
          }} style={styles.btn}>
            <Text style={styles.bold}>{toggle ? 'Back to Previous Listing': 'Sort Alphabetically' }</Text>
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
    justifyContent: 'center',
    
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