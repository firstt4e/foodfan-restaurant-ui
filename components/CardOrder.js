import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';



const Images = [
  {image: require('../assets/banners/food-banner1.jpg')}, 
];

const CardOrder = ({itemData, onPress}) => {
  return (

    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
        <Image
                   source={{
                    uri: `${itemData.image}`,
                  }}
                    resizeMode="cover"
                    style={{height: 100, width: 120}}
                  />
        </View>
        <View style={styles.cardInfo}>
          {/* <Text style={styles.cardTitle}>{itemData.nameStore}</Text> */}
          <Text style={styles.cardTitle}>ID : {itemData.user}</Text>
          <Text style={styles.cardDetails}>ออเดอร์ : {itemData.serialNumber}</Text>
          <Text style={styles.cardDetails}>สถานะ : {itemData.status}</Text>
          <Text style={styles.cardDetails}>{itemData.Orderdate}</Text>
          {/* <Text style={styles.cardDetails}>{itemData.user}</Text> */}
          
          
          {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews} /> */}
          {/* <Text numberOfLines={2} style={styles.cardDetails}>฿{itemData.price}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
