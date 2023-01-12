import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as types from '../../../redux/types'

const useViewModel = ({ navigation }) => {
  const dispatch = useDispatch()
  const { currentPage, isGettingMoreData } = useSelector((state) => state.order)
  const [isLoading, setIsLoading] = useState(false)
  const [errroModal, setErrorModal] = useState(false)
  const [page, setPage] = useState(1)

  useMemo(() => {
    if (isGettingMoreData) {
      //setIsLoading(true)
      fetchPokemon()
    }
  }, [page])

  async function fetchPokemon() {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((res) => res.json())
      .then((response) => {
        onloadingHideModal()

        dispatch({
          type: types.POPULATE_POKEMON_LIST,
          payload: {
            pokemons: [...response.results],
            currentPage: currentPage + 1,
            isGettingMoreData: response.next != null ? true : false,
          },
        })
      })
      .catch(() => {
        onloadingHideModal()
      })
  }

  const onNextPage = () => setPage((page) => currentPage + 1)

  const onloadingShowModal = () => {
    setIsLoading(true)
  }

  const onloadingHideModal = () => {
    setIsLoading(false)
  }

  const onShowError = () => {
    setIsLoading(false)
    setErrorModal(true)
  }

  const onHideError = () => {
    setErrorModal(false)
  }

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
  }

  return {
    isLoading,
    errroModal,
    onloadingShowModal,
    onloadingHideModal,
    onShowError,
    onHideError,
    onNextPage,
    isCloseToBottom,
  }
}

export default useViewModel
