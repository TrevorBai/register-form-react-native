import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RegForm from './components/RegForm'

const App = () => {
  return (
    <View style={styles.screen}>
      <RegForm />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
