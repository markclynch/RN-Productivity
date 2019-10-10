import * as React from 'react'
import { Button, View, Text } from 'react-native'

const HomeScreen = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => props.navigation.push('Details')}
      />
    </View>
  )
}
export default HomeScreen
