import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

class Players extends Component {

  state = {
    clubs: []
  }

  componentDidMount() {
    let url = 'https://api.statorium.com/api/v1/standings/143?apikey=f41c2d8c8377a90c5d1708a22851eefb'
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('JSON', json)
        this.setState({ clubs: json.standings})
        return json;
      })
      .catch((error) => {
        console.error(error);
        this.setState({ clubs: [] })

      })
  }
  onChangeText(text) {
    console.log('textChanged', text)
  }

  ItemView(item) {
    console.log(item,'test')
    return (
      <View>
        <Text>{item.item.teamName}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container1}>
        <SafeAreaView >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, }}>
            <View>
              <Ionicons name='md-search' size={25} color='black' style={{ marginLeft: 10 }} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Search Player"
              onChangeText={text => this.onChangeText(text)}

            />
          </View>
        </SafeAreaView>
        <FlatList
          data={this.state.clubs}
          renderItem={item => this.ItemView(item)}
          ListEmptyComponent={() => (
            <Text style={{ color: 'white' }}>
              Nothing to show
            </Text>
          )
          }
        />
 


      </View>

    )
  }
}
export default Players;
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
    width: 280,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },
  card: {
    height: 30,
    backgroundColor: 'gray',

  }

})

