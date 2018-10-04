import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import {createStackNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import {createMaterialTopTabNavigator} from 'react-navigation'

import {createDrawerNavigator, DrawerItems} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    )
  }
}

// Create StackNavigation
const AppStackNavigator = createStackNavigator({
  Main: {screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: 'Main',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'gray', 
      }
    }),
  },
  Details: {screen: Details, 
    navigationOptions: ({ navigation }) => ({
      title: 'Details',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'gray', 
      }
    }),
  },
});

// ============================================================= StackNavigator

// Create Home Screen
// class Main extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Main</Text>
//         <Button 
//           title='Go to Details'
//           onPress={() => {
//             this.props.navigation.navigate('Details');
//           }}
//         >Go to Details</Button>
//       </View>
//     )
//   }
// }

// // Create Details Screen
// class Details extends React.Component {
//   render() {
//     const {goBack} = this.props.navigation;
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Details</Text>
//         <Button 
//           title='Go Back'
//           onPress={() => {
//             this.props.navigation.goBack();
//           }}
//         />
//       </View>
//     )
//   }
// }

// // Create StackNavigation
// const Apps = createStackNavigator({
//   Main: {screen: Main,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Main',
//       headerTintColor: 'white',
//       headerStyle: {
//         backgroundColor: 'gray', 
//       }
//     }),
//   },
//   Details: {screen: Details, 
//     navigationOptions: ({ navigation }) => ({
//       title: 'Details',
//       headerTintColor: 'white',
//       headerStyle: {
//         backgroundColor: 'gray', 
//       }
//     }),
//   },
// });

// export default Apps;

// ============================================================= StackNavigator - 2

// import LoginScreen from './screens/LoginScreen'
// import HomeScreen from './screens/HomeScreen'
// export default class App extends React.Component {
//   render() {
//     return (
//       <AppStackNavigator />
//     )
//   }
// }

// const AppStackNavigator = createStackNavigator({
//   Login: LoginScreen,
//   // Home: HomeScreen
//   Home: {screen: HomeScreen, 
//     navigationOptions: ({ navigation }) => ({
//       title: 'Home',
//       headerTintColor: 'white',
//       headerStyle: {
//         backgroundColor: 'gray', 
//       }
//     }),
//   }
// })

// ============================================================= 


// ============================================================= TabNavigator

// export class Home extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open Up App.js to start working with your app</Text>
//       </View>
//     );
//   }
// }
// export class Settings extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Settings</Text>
//       </View>
//     );
//   }
// }
// export default createBottomTabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-home" color={tintColor} size={24} />
//       )
//     }
//   },
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       tabBarLabel: 'Settings',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-settings" color={tintColor} size={24} />
//       )
//     }
//   }

// }, {//router config
//     initialRouteName: 'Settings',
//     order: ['Settings', 'Home'],
//     //navigation for complete tab navigator
//     navigationOptions: {
//       tabBarVisible: true
//     },
//     tabBarOptions: {
//       activeTintColor: 'purple',
//       inactiveTintColor: 'grey'
//     }
//   });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

// ============================================================= 


// =============================================================  MaterialBottomTabNavigator

// class HomeScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open Up App.js to start working with your app</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Settings</Text>
//       </View>
//     );
//   }
// }

// export default createMaterialBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-home" color={tintColor} size={24} />
//       )
//     }
//   },
//   Settings: {
//     screen: SettingsScreen,
//     navigationOptions: {
//       tabBarLabel: 'Settings',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-settings" color={tintColor} size={24} />
//       )
//     }
//   },
//   Profile: {
//     screen: SettingsScreen,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-settings" color={tintColor} size={24} />
//       )
//     }
//   },
//   Feed: {
//     screen: SettingsScreen,
//     navigationOptions: {
//       tabBarLabel: 'Feed',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-settings" color={tintColor} size={24} />
//       )
//     }
//   },
  

// }, {//router config
//     initialRouteName: 'Settings',
//     order: ['Settings', 'Home'],
//     //navigation for complete tab navigator
//     navigationOptions: {
//       tabBarVisible: true
//     },
//     shifting: true,
//     tabBarOptions: {
//       activeTintColor: 'white',
//       inactiveTintColor: 'grey'
//     }
//   });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

// =============================================================  


// =============================================================  MaterialTopTabNavigator (bottom)

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2'}}>
        <AppTabNavigator/>
      </SafeAreaView>
    )
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open Up App.js to start working with your app</Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const AppTabNavigator =  createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
  Feed: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
  

}, {//router config
    initialRouteName: 'Home',
    order: ['Home', 'Settings'],
    tabBarPosition: 'bottom',
    swipeEnabled: true, // default
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f2f2f2',
        // borderTopWidth: 0.5,
        // borderTopColor: 'grey'
      },
      indicatorStyle: {
        height: 0,
      },
      showIcon: true
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// ============================================================= 


// =============================================================  Drawer Navigator

// import HomeScreen from './screens/HomeForDraw';
// import SettingScreen from './screens/SettingForDraw';

// const {width} = Dimensions.get('window')
// export default class App extends React.Component {
//   render() {
//     return (
//       <AppDrawerNavigation />
//     )
//   }
// }

// const CustomDrawerComponent = (props) => (
//   <SafeAreaView style={{flex: 1}}>
//     <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
//       <Image source={require('./assets/3cb84d5de68ece124b637aa22d364736.png')} style={{height: 120, width: 120, borderRadius: 60 }}/>
//     </View>
//     <ScrollView>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </SafeAreaView>
// )

// const AppDrawerNavigation = createDrawerNavigator({
//   Home: HomeScreen,
//   Setting: SettingScreen
// }, {
//     contentComponent: CustomDrawerComponent,
//     drawerWidth: width,
//     contentOptions: {
//       activeTintColor: 'orange'
//     }
// })

// ============================================================= 