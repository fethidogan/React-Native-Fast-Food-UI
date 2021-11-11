import React from 'react'
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

const Category = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>

        {/* Header Wrapper */}
        <View style={styles.headerWrapper}>
          <Text style={styles.text}>Category</Text>
          <View style={styles.innerHeader}>
            <MaterialIcons name="search" size={33} color={"#1c1c1c"} style={styles.searchicon} />
            <Ionicons name="ios-cart-outline" size={33} color={"#1c1c1c"} />
          </View>
        </View>

        {/* Second Row */}
        <View style={styles.categoryRows}>
          <View>
            <Image source={require("../assets/images/pizza.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Pizza</Text>
          </View>
          <View>
            <Image source={require("../assets/images/hamburger.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Hamburger</Text>
          </View>
        </View>
        {/* Third Row */}
        <View style={styles.categoryRows}>
          <View>
            <Image source={require("../assets/images/chinese.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Chinese</Text>
          </View>
          <View>
            <Image source={require("../assets/images/coffee.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Coffee</Text>
          </View>
        </View>
        {/* Fourth Row */}
        <View style={styles.categoryRows}>
          <View>
            <Image source={require("../assets/images/sandwiches.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Sandwiches</Text>
          </View>
          <View>
            <Image source={require("../assets/images/salad.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Salad</Text>
          </View>
        </View>
        {/* Fifth Row */}
        <View style={styles.categoryRows}>
          <View>
            <Image source={require("../assets/images/desserts.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Desserts</Text>
          </View>
          <View>
            <Image source={require("../assets/images/taco.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Taco</Text>
          </View>
        </View>
        {/* Sixth Row */}
        <View style={[styles.categoryRows, { marginBottom: 50 }]}>
          <View>
            <Image source={require("../assets/images/kebab.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Kebab</Text>
          </View>
          <View>
            <Image source={require("../assets/images/pizza.png")} style={styles.categoryImage} />
            <Text style={styles.categoryItemText}>Organic Pizza</Text>
          </View>
        </View>


      </ScrollView>
    </View>
  )
}

export default Category
