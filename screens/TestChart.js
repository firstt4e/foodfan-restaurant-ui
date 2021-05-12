import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {Block, Card, Text, Icon, Label} from '../components';
import * as theme from '../constants/theme';

class TestChart extends Component {
  render() {
    return (
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{paddingVertical: 25}}>
          {/* คะแนนรวม */}
          <Card row middle style={styles.margin}>
            <Block flex={1.2} center middle style={{marginRight: 20}}>
              <Text
                ligth
                caption
                center
                style={{paddingHorizontal: 10, marginTop: 3}}>
                ยอดขายเมื่อวาน
              </Text>
              <Text light height={43} size={36} spacing={-0.45}>
                100
              </Text>
              <Text
                ligth
                caption
                center
                style={{paddingHorizontal: 16, marginTop: 3}}>
                จาน
              </Text>
            </Block>
            <Block>
            <Text
                ligth
                caption
                center
                style={{paddingHorizontal: 10, marginTop: 3}}>
                ยอดขายวันนี้
              </Text>
              <Text light center height={43} size={36} spacing={-0.45}>
                10
              </Text>
              <Text
                ligth
                caption
                center
                style={{paddingHorizontal: 16, marginTop: 3}}>
                จาน
              </Text>
            </Block>
          </Card>

          {/* จำนวน Vehicles */}
          <Block row style={[styles.margin, {marginTop: 18}]}>
            <Card middle style={{marginRight: 7, borderRadius: 10}}>
              {<Icon vehicle />}
              <Text h2 style={{marginTop: 17, fontSize: 22}}>
                5000฿
              </Text>
              <Text paragraph color="gray">
              ยอดขายเมื่อวาน
              </Text>
            </Card>

            <Card middle style={{marginLeft: 7, borderRadius: 10}}>
              {<Icon distance />}
              <Text h2 style={{marginTop: 17, fontSize: 22}}>
                500฿
              </Text>
              <Text paragraph color="gray">
                ยอดขายวันนี้
              </Text>
            </Card>
          </Block>

          <Card
            title="สินค้าขายดี ของเดือนนี้"
            style={[styles.margin, {marginTop: 18}]}>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={require('../assets/banners/eBeSim-banner1.png')}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>ข้าวผัดหมู</Text>
                    <Text paragraph color="gray">
                      ขายดีอันดับ 1
                    </Text>
                  </Block>
                  <Block>
                  <Text paragraph right color="black">
                      ฿800 
                    </Text>
                    <Text paragraph right color="gray">
                      20 จาน
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={require('../assets/banners/eBeSim-banner1.png')}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>ข้าวหมูทอดกระเทียม</Text>
                    <Text paragraph color="gray">
                    ขายดีอันดับ 2
                    </Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">
                      ฿600 
                    </Text>
                    <Text paragraph right color="gray">
                      15 จาน
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={require('../assets/banners/eBeSim-banner1.png')}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>ข้าวกระเพราหมูกรอบ</Text>
                    <Text paragraph color="gray">
                      ขายดีอันดับ 2
                    </Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">
                      ฿400
                    </Text>
                    <Text paragraph right color="gray">
                      10 จาน
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default TestChart;

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
    borderRadius: 10,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
