import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'

const Home = () => {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
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
    return <View>
      <Text>WAAWAW</Text>
  </View>
}

export default Home