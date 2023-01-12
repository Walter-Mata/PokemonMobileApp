import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

const Home = ({ navigation }) => {
  const [data, setData] = useState([])
  const [text, setText] = useState('')
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((res) => res.json())
      .then(
        (result) => {
          setData([...result.results])
          //   setIsLoading(false)
          //   setPrevious(result.previous)
          //   setNext(result.next)
          //   setItems(result)
          //   setPrevItems(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //   setIsLoading(false)
          //   setError(error)
        }
      )
  }, [])

  const headerInput = () => (
    <View style={{ padding: 10 }}>
      <TextInput
        label="Search Pokemon"
        mode="outlined"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  )

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        ListHeaderComponent={headerInput}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            key={index}
            style={styles.card}
            onPress={() => {
              //   navigation.navigate('Details', {
              //     pokemon: pokemon.name,
              //   })
            }}
          >
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
              }}
            />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
  },
})

export default Home
