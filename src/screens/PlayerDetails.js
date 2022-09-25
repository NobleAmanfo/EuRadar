import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView } from 'react-native';
import { styles } from '../design/styles';


function PlayerDetails({navigation,route}) {
    const [data, setData] = useState([]);


    useEffect(() => {
        // Update the document title using the browser API
       fetchData();
      }, []);
    
      const fetchData=()=>{
        let url = `https://api.statorium.com/api/v1/players/${details.id}/?season_id=143&apikey=f41c2d8c8377a90c5d1708a22851eefb`
        fetch(url)
        .then(response=>response.json())
        .then(responseJson=> {
            setData(responseJson.player)
        }
        )
          .catch((error) => {
            console.error(error);
            setPlayers([])
          })
      }
    const {details} = route.params; 
    console.log (details)
    return (
        <SafeAreaView style={[styles.container1]}>
            <View style={{borderWidth: 2, borderColor: '#94a274', paddingVertical:10, borderRadius:10, marginTop:5}}>
                <Image source={{uri: details.photo ? details.photo : 'https://cdn-icons-png.flaticon.com/512/77/77305.png'}} style={{width: 250,height: 250}}/>
            </View>
            <View style={{borderWidth: 2, borderColor: '#94a274', paddingVertical:10, paddingHorizontal:50, borderRadius:10, marginTop:10}}>
            <Text style={[styles.lg, styles.textCenter]}>Name: {data.fullName}</Text>
                <Text style={[styles.lg, styles.textCenter]}>D.O.B: {data.additionalInfo && data.additionalInfo.birthdate} </Text>
                <Text style={[styles.lg, styles.textCenter]}>position: {data.additionalInfo && data.additionalInfo.position === "1" ? 'Goalkeeper' : data.additionalInfo && data.additionalInfo.position === "2" ? 'Defender' :data.additionalInfo && data.additionalInfo.position === "3" ? 'Midfielder' : 'Attacker' }</Text>
                <Text style={[styles.lg, styles.textCenter]}>Club: {data.teams && data.teams.teamName} </Text>
                <Text style={[styles.lg, styles.textCenter]}>Squad Number: {data.teams && data.teams.teamName} </Text>
                <Text style={[styles.lg, styles.textCenter]}>Nationality: {data.country && data.country.name}</Text>
                
            </View>
            </SafeAreaView>
    )
}

export default PlayerDetails;
