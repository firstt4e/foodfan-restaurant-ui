import React, {Component} from 'react';
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
  Switch,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

export default class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
      isLoading: false,
    };
  }

  getShopFromApi = filter => {
    const config = {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im1vYmlsZSI6eyJjb2RlIjoiKzY2IiwibnVtYmVyIjoiNjI3MTY2NzUwIn0sImJhbm5lZF9yZWNvcmQiOnsibG9nIjpbXX0sInZlcmlmeV9hY2NvdW50Ijp7ImVtYWlsIjp0cnVlLCJtb2JpbGUiOmZhbHNlLCJmYWNlYm9vayI6ZmFsc2UsImdvb2dsZSI6ZmFsc2V9LCJ1c2VyX2FncmVlbWVudCI6eyJhY2NvdW50Ijp0cnVlLCJzaG9wIjp0cnVlLCJjdXN0b21lciI6dHJ1ZSwicmlkZXIiOmZhbHNlfSwidXNlcl9kZXRhaWwiOnsibmFtZSI6eyJmaXJzdG5hbWUiOiIiLCJsYXN0bmFtZSI6IiJ9LCJreWMiOnsiaWRfY2FyZF9ubyI6IiIsImxhc2VyX2NvZGUiOiIiLCJwZXJzb25faW1nIjoiIn0sInBvc2l0aW9uIjp7InBvc2l0aW9uIjoiIiwibGV2ZWwiOiIiLCJwcml2aWxlZ2UiOiIifSwid2FsbGV0Ijp7ImNhc2hfY3JlZGl0IjowLCJzX3BvaW50IjowLCJiX3BvaW50IjowLCJ0X3BvaW50IjowfSwibmV0d29yayI6eyJkb3duIjpbXSwidXAiOiJyb290In0sInByb2ZpbGVfaW1nIjoiIiwiYmFua19hY2NvdW50IjpbXX0sImxvZ2RldGFpbCI6eyJ1cGRhdGVkX2RhdGUiOiIyMDIxLTAyLTI2VDEzOjQyOjE0LjI4MFoiLCJ1cGRhdGVkX2J5IjoiNjAzOGY4YTQyNmYxNGYyZmYyYjU5MWI0In0sIl9pZCI6IjYwMzhmOGE0MjZmMTRmMmZmMmI1OTFiNCIsImVtYWlsIjoidGhhbmFrcml0LnN1QG1haWwud3UuYWMudGgiLCJoYXNoX3Bhc3N3b3JkIjoiJDJiJDA2JHlKbTRXWGM2Sm9YZVplZGMuTVFxVy5mUkNacURLMDVDZmZQZUl4RDhrdmFhdU5iRE5jd0tPIiwicmVnaXN0ZXJfYnkiOiJFTUFJTCIsIl9fdiI6MH0sImlhdCI6MTYxNDY2NjQ5NywiZXhwIjoxNjE0NzUyODk3fQ.LTR09ySOL1ofjrrSBPd36CjI24E4O4EZelsdpU2bjIqminL_TzWj-norQQk_zhT4Ga_sxlvqJFYD0Y6wAE7csw',
      },
    };

    const bodyParameters = {
      shop_id: '6038fefc26f14f2ff2b591b6',
    };

    this.setState({isLoading: true});

    axios
      .post(
        'https://service.ebesim.com/api/order/getorderbyshopid',
        bodyParameters,
        config,
      )
      .then(Response => {
        let st = [];
        if (Response.data.detail.length > 0) {
          // All
          if (filter == '') {
            this.setState({orderData: Response.data.detail, isLoading: false});
          } else if (filter == 'IN_PROGRESS') {
            // IN_PROGRESS
            Response.data.detail.map((item, index) => {
              item.status == 'IN_PROGRESS' ? st.push(item) : '';
            });
            this.setState({
              orderData: st,
              isLoading: false,
            });
          } else if (filter === 'SUCCESS') {
            Response.data.detail.map((item, index) => {
              item.status == 'SUCCESS' ? st.push(item) : '';
            });
            this.setState({
              orderData: st,
              isLoading: false,
            });
          }
        } else {
          this.setState({
            orderData: [],
            isLoading: false,
          });
        }
      })
      .catch(error => {
        console.log(error.response.data);
        this.setState({isLoading: false});
      });
  };

  componentDidMount() {
    this.getShopFromApi('IN_PROGRESS');
  }

  renderItem = ({item, index}) => {
    if (item.status === 'IN_PROGRESS' || item.status === 'SUCCESS') {
      return (
        <View key={index} style={styles.itemContainer}>
          {/* <Text style={styles.itemName}>{index}</Text> */}
          <View
            style={[
              styles.itemStatus,
              {
                backgroundColor:
                  item.status === 'IN_PROGRESS' ? '#E3C12B' : '#69c080',
              },
            ]}
          />
          <View style={styles.itemLogo}>
            <Image
              style={styles.itemImage}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/FsDtdBSth1V1Y84M-MAMaB7xGrvZ95lKbvf2MaNxzsyu2ozS78evRp1HrPrWZdIfYsSmok_Hj6O4hqZY=w768-h768-n-o-v1',
              }}
            />
          </View>

          <View style={styles.itemBody}>
            <Text style={styles.itemName}>{item._id}</Text>
            <Text style={styles.itemsubName}>
              สั่งเมื่อ {item.logdetail.created_date}
            </Text>
            <Text style={styles.itemsubName}>
              จำนวน {item.order_detail[0].quantity} จาน ราคาจานละ{' '}
              {item.order_detail[0].price}
            </Text>
            <Text style={styles.itemsubName}>สถานะ {item.status}</Text>
          </View>
          <View>
            <MaterialIcons
              name="info-outline"
              size={35}
              color="#E3C12B"
              onPress={() =>
                Alert.alert('เปลี่ยนสถานะสินค้าแล้ว สินค้าอยู่ในสถานะ "XXX"')
              }
            />
          </View>
        </View>
      );
    }
  };
  render() {
    const {orderData} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnTap}
            onPress={() => {
              this.getShopFromApi('IN_PROGRESS');
            }}>
            <Text style={styles.textTab}>กำลังทำ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnTapActive}
            onPress={() => {
              this.getShopFromApi('SUCCESS');
            }}>
            <Text style={styles.textTapActive}>เสร็จแล้ว</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={orderData} renderItem={this.renderItem} />
      </SafeAreaView>

      /*       <View>
        {orderData.length > 0 ? (
          orderData.map((item, index) => {
            if (item.status === 'REJECT') {
              return <Text>{item._id}</Text>;
            }
          })
        ) : (
          <Text>No data!</Text>
        )}
      </View> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnTap: {
    width: Dimensions.get('window').width / 3.7,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#1f65ff',
    padding: 10,
    justifyContent: 'center',
    borderBottomRightRadius: 0,
    borderRadius: 4,
    alignItems: 'center',
    borderTopRightRadius: 0,
  },
  textTap: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnTapActive: {
    width: Dimensions.get('window').width / 3.7,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#1f65ff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 4,
    backgroundColor: '#007aff',
  },
  textTapActive: {
    fontWeight: 'bold',
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  itemLogo: {
    padding: 5,
    justifyContent: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'kanit',
  },
  itemsubName: {
    color: 'grey',
    fontSize: 14,
  },
  itemStatus: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    borderRadius: 30,
  },
  Button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
