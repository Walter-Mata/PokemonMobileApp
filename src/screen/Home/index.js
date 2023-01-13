import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useSelector } from 'react-redux'
//COMPONENT
import PokemonCard from '../../component/PokemonCard'
//CONTROLLER
import useController from './controller/index.controller'

const Home = ({ navigation }) => {
  const { list } = useSelector((state) => state.pokemon.pokemons)
  const { isLoading } = useController()
  const [data, setData] = useState([])
  const [text, setText] = useState('')

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
        data={list}
        ListHeaderComponent={headerInput}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        // renderItem={({ item, index }) => (
        //   <TouchableOpacity
        //     activeOpacity={0.5}
        //     key={index}
        //     style={styles.card}
        //     onPress={() => {
        //       //   navigation.navigate('Details', {
        //       //     pokemon: pokemon.name,
        //       //   })
        //     }}
        //   >
        //     <Image
        //       style={{ width: 150, height: 150 }}
        //       source={{
        //         uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
        //       }}
        //     />
        //     <Text>{item.name}</Text>
        //   </TouchableOpacity>
        // )}
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
