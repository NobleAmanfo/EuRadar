import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, Text, View, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { clubsUrl } from '../utils/constants';
import * as wpActions from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';


function Clubs({ navigation }) {
  const dispatch = useDispatch();
  const clubData = useSelector((state) => state.appData.clubData);
  const [pName, setpName] = useState('');
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);


  useEffect(() => {
    // Update the document title using the browser API
    fetchData();
  }, []);

  const fetchData = () => {
    let url = clubsUrl
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log('JSON', json)
        let easternConference = json.season.groups[0].standings;
        let westernConference = json.season.groups[1].standings;
        const combinedStandings = [...easternConference, ...westernConference]
        dispatch(wpActions.saveClubData(combinedStandings))
      })
      .catch((error) => {
        console.error(error);
        dispatch(wpActions.saveClubData())
      })
  }

  const markFavorite=(code)=>{
    dispatch(wpActions.updateClubData(code));
  }

  const renderItemView = ({ item }) => {
    // console.log(item.options, 'codet testing')
    return (
      <View style={{ flexDirection: 'row', width: '95%' }}>
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
          <TouchableOpacity onPress={() => markFavorite(item.teamID)}
            style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Ionicons name={item.show ? 'star' : 'star-outline'} size={26} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

 const searchArray = clubData && clubData.filter(item => {
    if (pName === '') return item;
    if (item.teamName.toLowerCase().includes(pName.toLowerCase())) return item;
  });




  return (
    <SafeAreaView style={styles.container} >
      <View style={{ alignItems: 'center', }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, backgroundColor: '#94a274', width: '80%' }}>
          <View>
            <Ionicons name='md-search' size={25} color='black' />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search Player"
            placeholderTextColor='white'
            onChangeText={(text) => setpName(text)}
            value={pName}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {
          setToggle(!toggle); dispatch(wpActions.filterClubData())
        }} style={styles.btn}>
          <Text style={styles.bold}>{toggle ? 'Back to Previous Listing' : 'Sort Alphabetically'}</Text>
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
    paddingLeft: 10
  },
  listing: {
    flexDirection: 'row',
    marginVertical: 10,

  },
  btn: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#94a274',
    margin: 20,
    borderRadius: 10,
  },

})

// (ifExists(item) ? onRemoveFavorite(item) : onFavorite(item)