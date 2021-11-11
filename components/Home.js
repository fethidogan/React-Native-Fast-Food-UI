import React from 'react'
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import overPopularData from '../assets/data/overpopulardata';

const Home = () => {

  const renderOverPopular = ({ item }) => {
    return (
      <View style={styles.overPopularListItems}>
        <Image source={item.image} style={styles.overPopularListImage} />
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
        {/* Header Wrapper */}
        <View style={styles.headerWrapper}>
          <Text style={styles.text}>Home</Text>
          <View style={styles.innerHeader}>
            <MaterialIcons name="search" size={33} color={"#1c1c1c"} style={styles.searchicon} />
            <Ionicons name="ios-cart-outline" size={33} color={"#1c1c1c"} />
          </View>
        </View>

        {/* Header Text */}
        <View style={styles.headerTextWrapper}>
          <Text style={styles.headerText}>What would you like to eat?</Text>
        </View>

        {/* Header Image */}
        <View style={styles.headerImageWrapper}>
          <View style={styles.headerImageContainer}>
            <Image source={require("../assets/images/headerburger.jpg")} style={styles.headerImage} />
          </View>
        </View>

        {/* Over Popular */}
        <View style={styles.overPopularWrapper}>
          <Text style={styles.overPopularText}>Over Popular Items</Text>
          <View style={styles.overPopularItems}>
            <FlatList
              data={overPopularData}
              renderItem={renderOverPopular}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.overPopularWrapper}>
          <Text style={styles.overPopularText}>Categories</Text>
          {/* First Row */}
          <View style={styles.categoryItemWrapper}>
            <View>
              <Image source={require("../assets/images/pizza.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Pizza</Text>
            </View>
            <View>
              <Image source={require("../assets/images/hamburger.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Hamburger</Text>
            </View>
            <View>
              <Image source={require("../assets/images/salad.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Salad</Text>
            </View>
          </View>
          {/* Horizontal Line */}
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 20, marginHorizontal: 30 }} />
          {/* Second Row */}
          <View style={styles.categoryItemWrapper}>
            <View>
              <Image source={require("../assets/images/sandwiches.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Sandwiches</Text>
            </View>
            <View>
              <Image source={require("../assets/images/chinese.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Chinese</Text>
            </View>
            <View>
              <Image source={require("../assets/images/desserts.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Desserts</Text>
            </View>
          </View>
          {/* Horizontal Line */}
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 20, marginHorizontal: 30 }} />
          {/* Third Row */}
          <View style={[styles.categoryItemWrapper, { marginBottom: 30 }]}>
            <View>
              <Image source={require("../assets/images/coffee.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Coffee</Text>
            </View>
            <View>
              <Image source={require("../assets/images/kebab.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Kebab</Text>
            </View>
            <View>
              <Image source={require("../assets/images/taco.png")} style={styles.categoryImage} />
              <Text style={styles.categoryItemText}>Taco</Text>
            </View>
          </View>
        </View>
      </ScrollView>



    </View>
  )
}

export default Home
