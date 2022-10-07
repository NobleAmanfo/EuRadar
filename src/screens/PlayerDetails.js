import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import { styles } from '../design/styles';


function PlayerDetails({navigation,route}) {
    const [data, setData] = useState([]);
    const [video, setVideo] = useState([]);


    useEffect(() => {
        // Update the document title using the browser API
       fetchData();
       fetchData1();
      }, []);
    
      const fetchData=()=>{
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
     
  // 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=compilations&type=video&key=[YOUR_API_KEY]' \
  // --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  // --header 'Accept: application/json' \

      const fetchData1 = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search/${details.fullname}/?part=snippet&maxResults=5&order=relevance&q=compilations&type=video&key=AIzaSyDzwst2pUCUCfDKl9I7YLpVoLNAjjkWk6c`,{ 
          method: 'GET', 
          headers: new Headers({
              'Authorization': 'Bearer AIzaSyDzwst2pUCUCfDKl9I7YLpVoLNAjjkWk6c', 
              'Content-Type': 'application/json'
          }),
      })
      .then((response) => console.log(response.json))
      
      .catch((error) => {
        console.error(error);
    }); }
        
    const {details} = route.params; 
    console.log (details)
    return (
        <SafeAreaView style={[styles.container1]}>
            <View style={{borderWidth: 2, borderColor: '#94a274', paddingVertical:10, borderRadius:10, marginTop:5}}>
                <Image source={{uri: details.photo ? details.photo : 'https://cdn-icons-png.flaticon.com/512/77/77305.png'}} style={{width: 250,height: 250}}/>
            </View>
            <View style={{borderWidth: 2, borderColor: '#94a274', paddingVertical:10, paddingHorizontal:50, borderRadius:10, marginTop:10}}>
              {data.player ? <>
            <Text style={[styles.lg, styles.textCenter]}>Name: {data.player.fullName}</Text>
                <Text style={[styles.lg, styles.textCenter]}>D.O.B: {data.player.additionalInfo.birthdate} </Text>
                <Text style={[styles.lg, styles.textCenter]}>position: {data.player.additionalInfo.position === "1" ? 'Goalkeeper' : data.additionalInfo && data.additionalInfo.position === "2" ? 'Defender' :data.additionalInfo && data.additionalInfo.position === "3" ? 'Midfielder' : 'Attacker' }</Text>
                <Text style={[styles.lg, styles.textCenter]}>Club: {data.player.teams[0].teamName } </Text>
                <Text style={[styles.lg, styles.textCenter]}>Squad Number: {data.player.teams[0].playerNumber} </Text>
                <Text style={[styles.lg, styles.textCenter]}>Nationality: {data.player.country.name}</Text>
              </>
              : null }
            </View>
            <View>
                <WebView source = {{uri: video.url}}>
                    
                </WebView>
            </View>
            </SafeAreaView>
    )
}

export default PlayerDetails;
