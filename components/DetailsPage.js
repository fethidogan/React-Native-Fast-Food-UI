import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Foundation from "react-native-vector-icons/Foundation"

const DetailsPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
        {/* Header Wrapper */}
        <View style={styles.headerWrapper}>
          <Ionicons name="arrow-back" size={33} color={"#10b31b"} style={{ marginLeft: 10 }} />
          <View style={styles.innerHeader}>
            <MaterialIcons name="search" size={33} color={"#1c1c1c"} style={styles.searchicon} />
            <Ionicons name="ios-cart-outline" size={33} color={"#1c1c1c"} />
          </View>
        </View>

        {/* Header Image */}
        <View style={styles.detailsHeaderImageWrapper}>
          <View style={styles.detailsImage}>
            <Image source={require("../assets/images/headerburger.jpg")} style={styles.detailsImageItem} />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailsInnerContainer}>
            {/* Header Text */}
            <View style={styles.detailsHeaderTextWrapper}>
              <Text style={styles.detailsHeaderText}>Buffalo Burger</Text>
            </View>

            {/* Horizontal Line */}
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 10, marginHorizontal: 30 }} />

            {/* Price Section */}
            <View style={styles.detailsHeaderPriceWrapper}>
              <View style={styles.detailsHeaderPriceLeft}>
                <Text style={styles.detailsHeaderText}>01</Text>
                <Foundation name="plus" size={20} color={"#de733a"} style={{ marginLeft: 10 }} />
              </View>
              <Text style={{color:"#eb7b0c", fontSize:23}}>$15.99</Text>
            </View>

            {/* Info Text */}
            <View style={styles.detailsInfoTextWrapper}>
              <Text style={styles.detailsInfoText}>1 pc (Big Size)</Text>
              <Text style={{ marginTop: 10, fontFamily: "Roboto_400Regular", fontSize: 15, lineHeight: 23 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries </Text>
            </View>

            {/* Order Button */}
            <View style={styles.orderButtonWrapper}>
              <Text style={styles.orderText}>Order Now</Text>
              <Ionicons name="ios-cart-outline" size={32} color={"#1c1c1c"} style={{marginLeft:5}}/>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailsPage
