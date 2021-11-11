import React from 'react'
import { Text, View } from 'react-native';
import { styles } from './styles';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNavigation}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AntDesign name="home" size={40} style={{ marginLeft: 10 }} color="#0a8a19" />
        <Text style={{ marginLeft: 13 }}>Home</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <MaterialIcons name="favorite-border" size={40} color="#ba0941" />
        <Text>Home</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Ionicons name="fast-food" size={40} color="#7a2842" />
        <Text>Categories</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AntDesign name="user" size={40} style={{ marginRight: 10 }} color="#28677a" />
        <Text style={{ marginRight: 11 }}>User</Text>
      </View>
    </View>
  )
}

export default BottomNavigation
