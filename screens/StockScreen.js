/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const listTab = [
  {
    status: 'All',
  },
  {
    status: 'InProgess',
  },
  {
    status: 'Success',
  },
  {
    status: 'Reject',
  },
];

const data = [
  {
    name: 'ข้าวผัด',
    price: '40 บาท',
    count: '5',
    time: '8:30 น.',
    status: 'InProgess',
  },
  {
    name: 'ข้าวหมูทอด',
    price: '40 บาท',
    count: '5',
    time: '8:30 น.',
    status: 'InProgess',
  },
  {
    name: 'ข้าวแกง',
    price: '40 บาท',
    count: '5 ',
    time: '8:30 น.',
    status: 'Success',
  },
  {
    name: 'ข้าวไก่กระเทียม',
    price: '40 บาท',
    count: '5',
    time: '8:30 น.',
    status: 'Reject',
  },
];
const OrderScreen = ({navigation}) => {
  const [status, setStatus] = useState('All');
  const [datalist, setDatalist] = useState(data)
  const setStatusFilter = status => {
    if(status !== 'All'){ 
      setDatalist([...data.filter(e => e.status === status)])
    }else{
      setDatalist(data);
    }
    setStatus(status);
  };

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.itemContainer}>

       <View style={[styles.itemStatus,
        {backgroundColor: item.status === 'InProgess' ? '#E3C12B': item.status === 'Reject' ? '#E6838D': '#69c080'} ]}>
        </View>

        <View style={styles.itemLogo}>
          <Image
          style={styles.itemImage}
            source={{uri: 'https://img.kapook.com/u/2017/sarinee/July/week3/cok2.jpg'}}
          />
        </View>
        
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name} {item.price} * {item.count}</Text>
          <Text style={styles.itemsubName}>สั่งเมื่อ {item.time}</Text>
        </View>

        <View>
           <MaterialIcons name="close" size={35} color="#E6838D" onPress={() => Alert.alert('เปลี่ยนสถานะสินค้าแล้ว สินค้าอยู่ในสถานะ "REJECT"')}/>
           <MaterialIcons name="done" size={35} color="#69c080" onPress={() => Alert.alert('เปลี่ยนสถานะสินค้าแล้ว สินค้าอยู่ในสถานะ "Success"')}/>
        </View>
       
      </View>
    );
  };

  const separator = () =>{
    return <View style={{height:1, backgroundColor: '#f1f1f1'}}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map(e => (
          <TouchableOpacity
            style={[styles.btnTap, status === e.status && styles.btnTapActive]}
            onPress={() => setStatusFilter(e.status)}>
            <Text
              style={
                (styles.textTab, status === e.status && styles.textTapActive)
              }>
            {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data = {datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};

export default OrderScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnTap: {
    width: Dimensions.get('window').width / 3.7,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ededed',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 4,
  },
  textTap: {
    fontSize: 16,
  },
  btnTapActive: {
    backgroundColor: '#1f65ff',
  },
  textTapActive: {
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15
  },
  itemLogo: {
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent:'center',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemsubName: {
    color: 'grey',
    fontSize: 14,
  },
  itemStatus: {
    backgroundColor: 'red',
    paddingHorizontal: 2,
    justifyContent: 'center',
    borderRadius: 10,
  },
  Button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    borderRadius: 10,
  }
});
