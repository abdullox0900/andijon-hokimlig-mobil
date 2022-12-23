import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width+10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.93)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
    </View>
  )
}

export default CarouselCardItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    // height:300,
    paddingTop:10,
    marginTop:5,
    marginBottom:10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    // paddingLeft: 20,
    // paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    // paddingLeft: 20,
    // paddingLeft: 20,
    // paddingRight: 20
  }
})