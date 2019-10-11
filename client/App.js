import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'

const RootStack = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    initialRouteName: 'SignIn'
  }
)

const AppContainer = createAppContainer(RootStack)

const App = () => {
  return <AppContainer />
}

export default App
