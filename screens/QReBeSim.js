import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import CountDown from 'react-native-countdown-component';

const QReBeSim = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  const length = itemId.length + 3;
  let logoFromFile = require('../assets/logo.png');
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.itemImage}
          source={require('../assets/banners/eBeSim-banner1.png')}
        />
        <View style={styles.outQRContainer}>
          <View style={styles.inQRContainer}>
            <QRCode
              size={220}
              value={
                '00020101021229370016A0000006770101110113006' +
                '6627166750' +
                '5802TH5303764540' +length 
                +
                itemId +
                '.00630484B5'
              }
              logo={logoFromFile}
              logoSize={50}
              logoBackgroundColor="black"
            />
          </View>
        </View>

        <View>
          <CountDown
            until={300}
            size={15}
            onFinish={() => alert('หมดเวลาทำรายการ')}
            digitStyle={{}}
            digitTxtStyle={{color: '#000'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
          <Text style={styles.a1}>eBeSim App</Text>
          <Text style={styles.a1}> {itemId}.00 บาท</Text>
        </View>
        <Button
          style={styles.button}
          title="เสร็จสิ้น"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default QReBeSim;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'rgba(111, 111, 111, 0.5)',
    backgroundColor: 'rgba(255, 99, 71, 0.5)',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  outQRContainer: {
    height: '50%',
    width: '77%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: 'pink',
  },
  inQRContainer: {
    flex: 0.95,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  a1: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button: {
    height: '20%',
    width: '90%',
    marginTop: '5%',
    alignSelf: 'center',
  },
  itemImage: {
    width: '80%',
    height: '20%',
    marginTop: 10,
  },
});
