import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OrderListOfFood from '../components/OrdersBox/OrderListOfFood';
import Point from '../components/OrdersBox/Point';

import BtnFailAndCancel from '../components/OrdersBox/OrderFailAndCancel/StatusOrder';
import DetailCancelAndCancel from '../components/OrdersBox/OrderFailAndCancel/DetailOfOrder';
import BtnPending from '../components/OrdersBox/OrderPending/StatusOfOrder';
import DetailPending from '../components/OrdersBox/OrderPending/DetailOfOrder';
import BtnSuccess from '../components/OrdersBox/OrderSuccess/StatusOrder';
import DetailSuccess from '../components/OrdersBox/OrderSuccess/DetailOfOrder';

import styles from '../assets/styles';
const data = {
  nameStore: 'ร้านป้าแดง',
  serialNumber: 'EBF-1234567890',
  status: 'กำลังทำ',
  date: '01-01-2021 16:45:00',
  credit: 16,
  point: 0.2,
  img:
    'https://www.emquartier.co.th/wp-content/uploads/2018/01/980x525-5-1024x549.jpg',
};

// function ShowStatus(status) {
//   if (status.status === 'กำลังส่ง') {
//     return <BtnPending />;
//   } else if (status.status === 'ล้มเหลว' || status.status === 'ยกเลิก') {
//     return <BtnFailAndCancel status={status.status} />;
//   } else {
//     return <BtnSuccess />;
//   }
// }
function ShowDetail(status) {
  if (status.status === 'กำลังทำ') {
    return <DetailPending />;
  } else if (status.status === 'ล้มเหลว' || status.status === 'ล้มเหลว') {
    return <DetailCancelAndCancel />;
  } else {
    return <DetailSuccess />;
  }
}

const MyOrderDetails = ({route, navigation}) => {
  const {itemData} = route.params;
  const data = [
    {
      numberList: 1,
      name: 'ข้าวกะเพราหมูสับ',
      price: 57,
      toping: 'หมูกรอบ',
      // toping: 'ไข่ดาว',.
      special: 'ไข่ดาว',
      moreDetail: '-- ไม่มีเพิ่มเติมถึงร้าน --',
    },
    {
      numberList: 2,
      name: 'ข้าวคลุกกะเพรา',
      price: 75,
      toping: 'หมูกรอบ',
      special: 'ธรรมดา',
      moreDetail: 'เผ็ดกลาง',
    },
  ];
//   const {status} = route.params;
  return (
    <ScrollView>
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={[styles.cardsWrapper, {width: '96%'}]}>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons
              name="chevron-back-outline"
              size={30}
              style={{color: 'rgba(150, 150, 150, 1)', marginTop: 5}}
            /> */}
          {/* </TouchableOpacity> */}
          <View
            style={{
              justifyContent: 'center',
              marginBottom: 10,
              marginTop: 10,
            }}>
            <Text
              style={{alignSelf: 'flex-start', color: '#444', fontSize: 12}}>
              รหัสการสั่งซื้อ status
            </Text>
            <Text
              style={{
                alignSelf: 'flex-end',
                position: 'absolute',
                color: '#444',
                fontSize: 12,
              }}>
              {itemData.serialNumber}
            </Text>
          </View>

          <View
            style={[
              styles.randomMenuCard,
              {height: 'auto', marginVertical: 5},
            ]}>
            <View style={[test.cardInfo, {justifyContent: 'center'}]}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    paddingLeft: 2,
                    paddingRight: 14,
                  }}>
                  <Image
                    source={require('../assets/banners/food-banner5.jpg')}
                    resizeMode="cover"
                    style={{height: 60, width: 60}}
                  />
                </View>
                <View style={{width: '100%'}}>
                  <Text style={{color: 'black', fontSize: 13}}>
                    ร้าน chakuma
                  </Text>
                  {/* <ShowDetail status={status} /> */}
                </View>
              </View>
              </View>
              </View>


          <View
            style={[
              styles.randomMenuCard,
              {height: 'auto', marginVertical: 5},
            ]}>
            <View style={[test.cardInfo, {flex: 1, paddingLeft: 20}]}>
            <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>เวลาสั่ง :</Text>
                <Text style={test.report}>{itemData.Orderdate}</Text>
              </View>
              {/* <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>เวลาจัดส่ง :</Text>
                <Text style={test.report}>{itemData.Orderdate}</Text>
              </View> */}
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>ออเดอร์ที่ :</Text>
                <Text style={test.report}>{itemData.serialNumber}</Text>
              </View>
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>ผู้สั่ง :</Text>
                <Text style={test.report}>{itemData.user}</Text>
              </View>

            </View>
            </View>

              
              
              
            </View>
          </View>
          <View
            style={[
              styles.randomMenuCard,
              {height: 'auto', marginVertical: 5},
            ]}>
            <View style={[test.cardInfo]}>
              <View style={{marginBottom: 10}}>
                <Text style={{color: '#444', fontSize: 15}}>
                  สรุปคำสั่งซื้อ
                </Text>
              </View>
              <View>
              <OrderListOfFood data={itemData} />
                {/* <OrderListOfFood data={data[1]} /> */}
                {/* <OrderListOfFood data={data[1]} /> */}
              </View>
            </View>
          </View>
          <View
            style={[styles.randomMenuCard, {height: 110, marginVertical: 5}]}>
            <View style={[test.cardInfo, {flex: 3}]}>
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>ค่าอาหาร</Text>
                <Text style={test.textPrice}>฿57</Text>
              </View>
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>ค่าจัดส่ง</Text>
                <Text style={test.textPrice}>ฟรี</Text>
              </View>
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>ค่าบริการ</Text>
                <Text style={test.textPrice}>฿5</Text>
              </View>
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>รวมยอดชำระ</Text>
                <Text style={test.textPrice}>เงินสด ฿62</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[test.btnCallCenter]}
            onPress={() => {
              alert('comming soon....');
            }}>
            <View>
              <Text style={test.text}>ติดต่อ Call Center</Text>
            </View>
          </TouchableOpacity>
        </View>
      
      
    </ScrollView>
  );
};

const test = StyleSheet.create({
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgb(249,249,249)',
  },
  btnCallCenter: {
    backgroundColor: '#FF6347',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 630,
  },
  text: {
    // fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Kanit-Regular',
  },
  textPrice: {
    color: '#444',
    fontSize: 13,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 20,
  },
  card: {
    height: 80,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  report: {
    color: '#444',
    fontSize: 13,
    position: 'absolute',
    alignSelf: 'auto',
    right: 20,
  },
});

export {MyOrderDetails};
