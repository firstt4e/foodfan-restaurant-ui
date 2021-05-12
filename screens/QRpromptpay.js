import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import CountDown from 'react-native-countdown-component';

const QRpromptpay = ({navigation}) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.itemImage}
          source={require('../assets/PromptPay.jpg')}
        />
        <View style={styles.outQRContainer}>
          <View style={styles.inQRContainer}>
            <QRCode
              size={220}
              value={
                '00020101021129370016A000000677010111011300666271667505802TH530376463048956'
              }
            />
          </View>
        </View>

        <View>
          <Text style={styles.a1}>ร้านพี่โอม</Text>
        </View>

        <Button
          style={styles.button}
          title="เสร็จสิ้น"
          onPress={() =>
            navigation.navigate('HomeScreen', {title: 'เสร็จสิ้น'})
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default QRpromptpay;

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
    height: '55.5%',
    width: '77%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: 'pink',
  },
  inQRContainer: {
    flex: 0.97,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  text: {
    marginTop: '15%',
  },
  a1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'center',
  },
  itemImage: {
    width: '80%',
    height: '20%',
    marginTop: 10,
  },
});
