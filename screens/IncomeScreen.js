import React, {Component} from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, ProgressBar, Colors} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class IncomeScreen extends Component {
  state = {name: 1};
  render() {
    const point = 60;
    const shoot = point - 135;
    const Shootpoint = (shoot * 100) / 635;
    const Suspoint = (point * 100) / 135;
    const x2 = Shootpoint / 100;
    const x = Suspoint / 100;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Avatar.Image source={require('../assets/ebesim.jpg')} size={70} />
            <View style={{marginLeft: 20}}>
              <Title
                style={[
                  styles.title,
                  {
                    fontSize: 16,
                  },
                ]}>
                eBeSim
              </Title>
              <Title
                style={[
                  styles.title,
                  {
                    fontSize: 28,
                  },
                ]}>
                0.00 ฿
              </Title>
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
              <Title>50฿</Title>
              <Caption>ยอดขายวันนี้</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>5000 ฿</Title>
              <Caption>ยอดที่ยังขายได้</Caption>
            </View>
          </View>
          <View style={styles.sharecode}>
            <Text>รหัสแนะนำเพื่อน EBE001</Text>
            <MaterialCommunityIcons name="share" size={15} color="#FF6347" />
          </View>
        </View>
        <View>
          <View style={styles.sliderContainer}>
            <Swiper
              showsVerticalScrollIndicator={true}
              height={200}
              activeDotColor="#E2341C">
              <View style={styles.slide}>
                <View style={styles.Showpoint}>
                  <View style={[styles.infoBox]}>
                    <Text>EM</Text>
                    <Text>Starting Plan</Text>
                  </View>
                  <View style={[styles.infoBox]}>
                    <Caption>{point} T-point</Caption>
                    <Caption>ระดับพิเศษ</Caption>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={30}
                    color="#000"
                  />
                </View>
                <ProgressBar
                  progress={x}
                  color={Colors.amber500}
                  width={'100%'}
                  style={styles.progress}
                />
              </View>
              <View style={styles.slide}>
                <View style={styles.Showpoint}>
                  <View style={[styles.infoBox]}>
                    <Text>Gold</Text>
                    <Text>Sustainable Plan</Text>
                  </View>
                  <View style={[styles.infoBox]}>
                    <Caption>{point}T-Point</Caption>
                    <Caption>ระดับพิเศษ</Caption>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={30}
                    color="#000"
                  />
                </View>
                <ProgressBar
                  progress={x}
                  color={Colors.amber500}
                  width={'100%'}
                  style={styles.progress}
                />
              </View>
              <View style={styles.slide}>
                <View style={styles.Showpoint}>
                  <View style={[styles.infoBox]}>
                    <Text>Premeir</Text>
                    <Text>Shooting Plan</Text>
                  </View>
                  <View style={[styles.infoBox]}>
                    <Caption>{shoot} T-point</Caption>
                    <Caption>ระดับพิเศษ</Caption>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={30}
                    color="#000"
                  />
                </View>
                <ProgressBar
                  progress={x2}
                  color={Colors.amber500}
                  width={'100%'}
                  style={styles.progress}
                />
              </View>
            </Swiper>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default IncomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    paddingBottom: 60,
  },
  sharecode: {
    alignSelf: 'center',
    backgroundColor: '#E74212',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    backgroundColor: 'white',
    height: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontFamily: 'kanit',
    color: '#fff',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 5,
    backgroundColor: '#ff6347',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  infoBoxWrapper: {
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '35%',
    margin: 10,
  },
  infoBox: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Showpoint: {
    borderRadius: 10,
    flexDirection: 'row',
    height: '50%',
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  progress: {
    height: 10,
    borderRadius: 10,
    marginLeft: '5%',
    marginRight: '5%',
  },
});
