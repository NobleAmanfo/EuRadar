import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { styles } from '../design/styles';


function PlayerDetails({navigation,route}) {
    const [data, setData] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [countryData, setCountryData] = useState([]);


    useEffect(() => {
        // Update the document title using the browser API
       fetchData();
       fetchData1();
      //  fetchData2();
      }, []);
    
      const fetchData =()=>{
        let url = `https://api.statorium.com/api/v1/players/${details.id}/?season_id=143&apikey=f41c2d8c8377a90c5d1708a22851eefb`
        fetch(url)
        .then(response=>response.json())
        .then(responseJson=> {
            setData(responseJson)
        }
        )
          .catch((error) => {
            console.error(error);
            setPlayers([])
          })
      }
      
      const fetchData1 = () => {
        let url = `https://newsapi.org/v2/everything?q="${details.fullname}"&pageSize=10&sortBy=relevancy&apiKey=b7ebb650437d4d95bcbf85be5d6b0113`
        fetch(url)
          .then(response => response.json())
          .then(responseJson => {
            setNewsData(responseJson.articles);
            console.log(responseJson.articles)
          }
          )
          .catch((error) => {
            console.error(error);
            // setClubs([])
          })
      }

      // const fetchData2=()=>{
      //   let url = `https://countryflagsapi.com/png/${data.country}`
      //   fetch(url)
      //   .then(response=>response.json())
      //   .then(responseJson=> {
      //     setCountryData(responseJson)
      //     console.log(countryData)
      //   }
      //   )
      //     .catch((error) => {
      //       console.error(error);
            
      //     })
      // }
        
    const {details} = route.params; 
    console.log (details)
    return (
        <SafeAreaView style={[styles.container1]}>
          

          {/* //card 2 */}
            <View style = {{flexDirection:'row', alignItems: 'center', padding: 20, backgroundColor: 'white', width: '90%', borderRadius: 10}}>
            <View style = {{width:'30%', alignItems: 'center', backgroundColor: '#00001c', paddingTop: 10, borderRadius: 10}}>
                <Image source={{uri: details.photo ? details.photo : 'https://cdn-icons-png.flaticon.com/512/77/77305.png'}} style={{ width: 120, height: 120, resizeMode: 'contain' }}/>
            </View>
            <View  style = {{width:'70%', paddingLeft: 10}}>
              {data.player ? <>
                <Text style={[styles.lg1]}>{data.player && data.player.teams[0].playerNumber} </Text>
                <Text style={[styles.lg2]}>{data.player && data.player.fullName}</Text>
                <Text style={[styles.lg1]}>{data.player && data.player.teams[0].teamName } </Text>
                <Text style={[styles.lg1]}>{data.player && data.player.additionalInfo.position === "1" ? 'Goalkeeper' : data.additionalInfo && data.additionalInfo.position === "2" ? 'Defender' :data.additionalInfo && data.additionalInfo.position === "3" ? 'Midfielder' : 'Forward' }</Text>
                <Text style={[styles.lg1]}>Nationality: {data.player && data.player.country.name}</Text>
                {/* <Image source = {{uri: `https://countryflagsapi.com/png/${data.country}`}}/> */}
              </>
              : null }
            </View>
            </View>
            <ScrollView style ={{width:'100%', marginBottom:55, marginTop:30}}>
          <View style={{ alignItems: 'center', borderWidth: 2, borderColor: '#94a274', paddingVertical: 10, borderRadius: 10, marginTop: 5, paddingHorizontal: 10, width: '100%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>NEWS</Text>
            {
              newsData && newsData.map(item => {
                return (
                  <TouchableOpacity key={item.publishedAt} style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, borderRadius: 10, borderColor: '#94a274', borderWidth: 1, padding: 10, width: '100%' }} onPress={() => Linking.openURL(item.url)} >
                    <Image source={{ uri: item.urlToImage ? item.urlToImage : 'https://cdn-icons-png.flaticon.com/512/77/77305.png' }} style={{ width: 50, height: 50, marginRight: 10, }} />
                    <Text style={[styles.sm, styles.textCenter,]}>{item.title}</Text>
                  </TouchableOpacity>
                )

              })
            }
          </View>
        </ScrollView>
            
            </SafeAreaView>
    )
}

export default PlayerDetails;


const styless = StyleSheet.create({
  container: {

    justifyContent: "center",
    alignItems: "center",
  },
  
  card: {
    paddingVertical: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});