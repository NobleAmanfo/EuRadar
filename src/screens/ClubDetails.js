import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';

import { styles } from '../design/styles';

function ClubDetails({ navigation, route }) {
  const [data, setData] = useState([])
  const [newsData, setNewsData] = useState([])
  const { details } = route.params;
  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);

  const fetchData = () => {
    let url = `https://api.statorium.com/api/v1/teams/${details.teamID}/?season_id=143&apikey=f41c2d8c8377a90c5d1708a22851eefb`
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson.team);
        // const options = JSON.parse(responseJson.options)
        // console.log(responseJson.team.options)
      }
      )
      .catch((error) => {
        console.error(error);
        // setClubs([])
      })
  }
  const fetchData1 = () => {
    let url = `https://newsapi.org/v2/everything?q="${details.teamName}"&pageSize=5&sortBy=relevancy&apiKey=b7ebb650437d4d95bcbf85be5d6b0113`
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setNewsData(responseJson);
        console.log(responseJson.articles[3])
      }
      )
      .catch((error) => {
        console.error(error);
        // setClubs([])
      })
  }
  const renderItemView = ({ item }) => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, borderRadius: 10, borderColor: '#94a274', borderWidth: 1, padding: 10, width: '95%', }}>
        <Image source={{ uri: item.photo ? item.photo : 'https://cdn-icons-png.flaticon.com/512/77/77305.png' }} style={{ width: 50, height: 50, alignItems: 'center', }} />
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: '#fff', paddingLeft: 10, paddingTop: 8, paddingBottom: 5, textAlign: 'left', fontWeight: 'bold', color: '#94a274' }}>{item.fullName}</Text>
          <Text style={{ fontSize: 15, color: '#fff', paddingLeft: 10, paddingTop: 8, paddingBottom: 5, textAlign: 'left', fontWeight: 'bold' }}>Squad Number: {item.playerNumber}</Text>
          {/* <Text style={{fontSize: 12, color: '#fff', paddingLeft: 10,textAlign: 'left', fontWeight:'bold'}}>{item.teamname}</Text> */}
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: '#fff', paddingLeft: 10, paddingTop: 8, paddingBottom: 5, textAlign: 'left', fontWeight: 'bold' }}>position: {item.additionalInfo.position === "1" ? 'Goalkeeper' : data.additionalInfo && data.additionalInfo.position === "2" ? 'Defender' : data.additionalInfo && data.additionalInfo.position === "3" ? 'Midfielder' : 'Attacker'}</Text>
          <Text style={{ fontSize: 15, color: '#fff', paddingLeft: 10, paddingTop: 8, paddingBottom: 5, textAlign: 'left', fontWeight: 'bold' }}>country: {item.country.name}</Text>
        </View>



      </View>
    );
  };
  return (
    <SafeAreaView style={[styles.container1]}>
      
        <View style={{ borderWidth: 2, borderColor: '#94a274', paddingVertical: 10, borderRadius: 10, marginTop: 5, paddingHorizontal: 10 }}>
          <Image source={{ uri: details.logo ? details.logo : 'https://cdn-icons-png.flaticon.com/512/77/77305.png' }} style={{ width: 150, height: 150 }} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#94a274', paddingVertical: 10, paddingHorizontal: 50, borderRadius: 10, marginTop: 10 }}>

          <Text style={[styles.lg, styles.textCenter]}>Name: {details.teamName}</Text>
          {data ? <>
            <Text style={[styles.lg, styles.textCenter]}>City: {data.city} </Text>
            <Text style={[styles.lg, styles.textCenter]}>Stadium: {data.homeVenue && data.homeVenue.name} </Text>

            {/* <Text style={[styles.lg, styles.textCenter]}>D.O.B: {data.player.additionalInfo.birthdate} </Text>
            <Text style={[styles.lg, styles.textCenter]}>position: {data.player.additionalInfo.position === "1" ? 'Goalkeeper' : data.additionalInfo && data.additionalInfo.position === "2" ? 'Defender' :data.additionalInfo && data.additionalInfo.position === "3" ? 'Midfielder' : 'Attacker' }</Text>
            <Text style={[styles.lg, styles.textCenter]}>Club: {data.player.teams[0].teamName } </Text>
            <Text style={[styles.lg, styles.textCenter]}>Squad Number: {data.player.teams[0].playerNumber} </Text>
            <Text style={[styles.lg, styles.textCenter]}>Nationality: {data.player.country.name}</Text> */}
          </>
            : null}
        </View>
        <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#94a274', paddingVertical: 10, paddingHorizontal: 50, borderRadius: 10, marginTop: 10 }}>
          <Text style={[styles.lg, styles.textCenter]}>P: {details.options.played_chk}</Text>
          <Text style={[styles.lg, styles.textCenter]}>W: {details.options.played_chk}</Text>
          <Text style={[styles.lg, styles.textCenter]}>D: {details.options.played_chk}</Text>
          <Text style={[styles.lg, styles.textCenter]}>L: {details.options.played_chk}</Text>
          <Text style={[styles.lg, styles.textCenter]}>GD: {details.options.played_chk}</Text>
        </View>
        
        <FlatList
          data={data.players}
          renderItem={item => renderItemView(item)}
          ListEmptyComponent={() => (
            <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', }}>
              Nothing to show
            </Text>
          )
          }
        />
        <View style={{ alignItems: 'center', borderWidth: 2, borderColor: '#94a274', paddingVertical: 10, borderRadius: 10, marginTop: 5, paddingHorizontal: 10, width: '100%' }}>
                  <Text style={{fontWeight:'bold', fontSize:18,  color: 'white'}}>NEWS</Text>

        <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, borderRadius: 10, borderColor: '#94a274', borderWidth: 1, padding: 10, width: '100%' }}>
          <Image source={{ uri: newsData.articles[0].urlToImage ? newsData.articles[0].urlToImage : 'https://cdn-icons-png.flaticon.com/512/77/77305.png' }} style={{ width: 50, height: 50, marginRight:10, }} />
          <Text style={[styles.sm, styles.textCenter, ]}>{newsData.articles[0].title}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, borderRadius: 10, borderColor: '#94a274', borderWidth: 1, padding: 10,width: '100%' }}>
          <Image source={{ uri: newsData.articles[1].urlToImage ? newsData.articles[1].urlToImage : 'https://cdn-icons-png.flaticon.com/512/77/77305.png' }} style={{ width: 50, height: 50, marginRight:10 }} />
          <Text style={[styles.sm, styles.textCenter]}>{newsData.articles[1].title}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, borderRadius: 10, borderColor: '#94a274', borderWidth: 1, padding: 10,width: '100%' }}>
          <Image source={{ uri: newsData.articles[2].urlToImage ? newsData.articles[2].urlToImage : 'https://cdn-icons-png.flaticon.com/512/77/77305.png' }} style={{ width: 50, height: 50, marginRight:10 }} />
          <Text style={[styles.sm, styles.textCenter]}>{newsData.articles[2].title}</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>

  );
};

//make this component available to the app
export default ClubDetails;
