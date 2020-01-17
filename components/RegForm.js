import React, { useState, useEffect, useCallback } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const RegForm = props => {

  const [username, setUsername] = useState('')

  const [email, setEmail] = useState('')

  const [registerable, setRegisterable] = useState(false)

  const updateRegisterableHandler = useCallback(() => {
    if (username && email) setRegisterable(true)
  }, [username, email])

  useEffect(() => {
    updateRegisterableHandler()
  }, [updateRegisterableHandler])

  const onChangeUsernameHandler = username => {
    setUsername(username)
  }

  const onChangeEmailHandler = email => {
    setEmail(email)
  }

  const registerUserHandler = () => {
    console.log(username, email)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Name"
        style={styles.input}
        onChangeText={onChangeUsernameHandler}
        value={username}
      />
      <TextInput
        placeholder="Your Email"
        onChangeText={onChangeEmailHandler}
        style={styles.input}
        value={email}
      />
      <View style={styles.button}>
        <Button
          title="Register"
          onPress={registerUserHandler}
          disabled={!registerable}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  button: {
    width: '70%',
    marginTop: 20
  }
})

export default RegForm