import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useSelector } from 'react-redux'
//COMPONENT
import PokemonCard from '../../component/PokemonCard'
//CONTROLLER
import useController from '../Home/controller/index.controller'

const MyFavorites = ({ navigation }) => {
  const { favorite } = useSelector((state) => state.pokemon)
  const { isLoading, onSearchFavorite } = useController()
  const [data, setData] = useState([])
  const [text, setText] = useState('')

  const headerInput = () => (
    <View style={{ padding: 10 }}>
      <TextInput
        label="Search Pokemon"
        mode="outlined"
        value={text}
        onChangeText={(text) => {
          setText(text)
          setData([...onSearchFavorite(text)])
        }}
      />
    </View>
  )

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.length > 0 ? data : favorite}
        ListHeaderComponent={headerInput}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  )
}

export default MyFavorites
