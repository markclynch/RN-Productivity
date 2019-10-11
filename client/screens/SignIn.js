import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, Button } from 'react-native-elements'
const styles = StyleSheet.create({
  headerText: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold'
  },
  wrapper: {
    backgroundColor: 'red',
    padding: 5
  },
  styledButton: {
    marginBottom: 500
  },
  viewSpaaaaace: {
    margin: 20
  }
})
const SignIn = props => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>Home Screen</Text>

      <Input
        containerStyle={styles.viewSpaaaaace}
        leftIcon={{ type: 'email', name: 'email' }}
        placeholder='  email@address.com'
      />

      <Input
        containerStyle={styles.viewSpaaaaace}
        leftIcon={{ type: 'password', name: 'lock' }}
        placeholder='  Password'
        secureTextEntry={true}
      />

      <Button
        containerStyle={styles.viewSpaaaaace}
        raised
        title='Sign In!'
        onPress={() => props.navigation.push('SignUp')}
        style={styles.styledButton}
      />

      <Button
        containerStyle={styles.viewSpaaaaace}
        raised
        title='Sign Up!'
        onPress={() => props.navigation.push('SignUp')}
        style={{ marginTop: 100 }}
      />
    </View>
  )
}
export default SignIn
