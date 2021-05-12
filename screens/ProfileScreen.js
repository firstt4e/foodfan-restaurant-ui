/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

import files from '../assets/filesBase64';

const ProfileScreen = () => {
  const myCustomShare = async () => {
    const shareOptions = {
      message:
        'เปลี่ยนจ่ายรายจ่ายเป็นรายได้ ใช้จ่ายผ่านแอพ eBeSim ได้แล้ววันนี้',
       //url: files.appLogo,
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image source={require('../assets/banners/chakuma.jpg')}
           size={80} />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              ร้านชาคุมะ
            </Title>
            <Caption style={styles.caption}>chakuma@hotmail.com</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#FF6347" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>ตำแหน่ง</Text>
          <Text style={{color: '#777777', marginLeft: 20}}>SM</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#FF6347" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>ระดับพิเศษ</Text>
          <Text style={{color: '#777777', marginLeft: 20}}>Gold</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#FF6347" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>สิทธิพิเศษ</Text>
          <Text style={{color: '#777777', marginLeft: 20}}>Premeir</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>500฿</Title>
          <Caption>ยอดขายวันนี้</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>1000฿</Title>
          <Caption>ยอดที่ยังขายได้</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>เมนูแนะนำของร้าน</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>ช่องทางการจ่ายเงิน</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>แนะนำเพื่อน</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 60,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 2,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
