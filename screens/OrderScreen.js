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
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

const api = require('../webservice');

const bodyParameters = {
  //shop_id: '6038fefc26f14f2ff2b591b6',
};

export default class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
      productList: [],
      isLoading: false,
    };
  }

  getShopFromApi = filter => {
    /*  const config = {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im1vYmlsZSI6eyJjb2RlIjoiKzY2IiwibnVtYmVyIjoiNjI3MTY2NzUwIn0sImJhbm5lZF9yZWNvcmQiOnsibG9nIjpbXX0sInZlcmlmeV9hY2NvdW50Ijp7ImVtYWlsIjp0cnVlfSwidXNlcl9hZ3JlZW1lbnQiOnsiYWNjb3VudCI6dHJ1ZSwic2hvcCI6ZmFsc2UsImN1c3RvbWVyIjpmYWxzZSwicmlkZXIiOmZhbHNlfSwidXNlcl9kZXRhaWwiOnsibmFtZSI6eyJmaXJzdG5hbWUiOiIiLCJsYXN0bmFtZSI6IiJ9LCJreWMiOnsiaWRfY2FyZF9ubyI6IiIsImxhc2VyX2NvZGUiOiIiLCJwZXJzb25faW1nIjoiIn0sInBvc2l0aW9uIjp7InBvc2l0aW9uIjoiIiwibGV2ZWwiOiIiLCJwcml2aWxlZ2UiOiIifSwid2FsbGV0Ijp7ImVfY3JlZGl0IjowLCJzX3BvaW50IjowLCJiX3BvaW50IjowLCJ0X3BvaW50IjowLCJ2X3BvaW50IjowfSwibmV0d29yayI6eyJkb3duIjpbXSwidXAiOiJyb290In0sInByb2ZpbGVfaW1nIjoiIiwiYmFua19hY2NvdW50IjpbXX0sImxvZ2RldGFpbCI6eyJjcmVhdGVkX2RhdGUiOiIyMDIxLTAzLTIyVDAzOjMzOjQ3LjkzOVoiLCJjcmVhdGVkX2J5IjoiU1lTVEVNIiwidXBkYXRlZF9kYXRlIjoiMjAyMS0wMy0yMlQwMzozMzo0Ny45NDJaIiwidXBkYXRlZF9ieSI6IlNZU1RFTSJ9LCJfaWQiOiI2MDU4MTAxYmZjOTFlZTAwMTFjMTEwZmYiLCJlbWFpbCI6InRoYW5ha3JpdC5zdUBtYWlsLnd1LmFjLnRoIiwiaGFzaF9wYXNzd29yZCI6IiQyYiQwNiQvWS9mNlgxUmpFWVo2dW1paEZUM2kueEhOVEN4QVg0dnVMeGNYVXZncVBhVkhDMExRNU1RNiIsInJlZ2lzdGVyX2J5IjoiRU1BSUwiLCJfX3YiOjB9LCJpYXQiOjE2MTYzODQxNDgsImV4cCI6MTYxNjQ3MDU0OH0.QeITyyqXgmOGJSDi6CzcBMmeQj_aEtKG01fFGAr6lSYPicn73pbw1OAfF8wKj-yLEGLUxZE5JNVvP3cyWhyeXw',
      },
    }; */

    this.setState({isLoading: true});
    api
      .getOrderall(bodyParameters)
      .then(Response => {
        console.log(Response.data);
        let st = [];
        if (Response.data.length > 0) {
          // All
          if (filter == '') {
            this.setState({orderData: Response.data, isLoading: false});
            console.log("1");
          } else if (filter == 'IN_PROGRESS') {
            // IN_PROGRESS
            console.log("2");
            Response.data.map((item, index) => {
              item.status == 'IN_PROGRESS' ? st.push(item) : '';
            });
            this.setState({
              orderData: st,
              isLoading: false,
            });
          } else if (filter === 'Waiting') {
            console.log("3");
            Response.data.map((item, index) => {
              item.status == 'Waiting' ? st.push(item) : '';
              console.log(item.status);
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
        console.log(error);
        this.setState({isLoading: false});
      });
  };

  componentDidMount() {
    this.getShopFromApi('Waiting');
  }

  renderItem = ({item, index}) => {
    if (item.status === 'IN_PROGRESS' || item.status === 'Waiting') {
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
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate('DetailOrderScreen')}>
            <View style={styles.itemLogo}>
              <Image
                style={styles.itemImage}
                source={{
                  uri:
                    'https://lh3.googleusercontent.com/FsDtdBSth1V1Y84M-MAMaB7xGrvZ95lKbvf2MaNxzsyu2ozS78evRp1HrPrWZdIfYsSmok_Hj6O4hqZY=w768-h768-n-o-v1',
                }}
              />
              <View style={styles.itemBody}>
                <Text style={styles.itemName}>{item._id}</Text>
                <Text style={styles.itemsubName}>สถานะ {item.status}</Text>
              </View>
            </View>
            {/* <View style={styles.itemBody}>
              
              <Text style={styles.itemsubName}>
                สั่งเมื่อ {item.logdetail.created_date}
              </Text>
              <Text style={styles.itemsubName}>
                จำนวน {item.order_detail[0].quantity} ราคารวม
                {item.order_detail[0].price} ฿
              </Text>
              
            </View> */}
          </TouchableOpacity>
        </View>
      );
    }
  };
  render() {
    const {orderData} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
        <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banners/food-banner2.jpg')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnTap}
            onPress={() => {
              this.getShopFromApi('IN_PROGRESS');
            }}>
            <Text style={styles.textTab}>ออร์เดอร์</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={orderData} renderItem={this.renderItem} />
        <View
          style={{justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnTapActive}
            onPress={() => {
              this.getShopFromApi('SUCCESS');
            }}>
            <Text style={styles.textTapActive}>ทำเสร็จแล้ว</Text>
          </TouchableOpacity>
        </View>
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
  cardImgWrapper: {
    flex: 1,
    margin: 10,
  },
  cardImg: {
    height: '100%',
    width: '110%',
    alignSelf: 'center',
    borderRadius: 8,
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
    borderColor: '#000',
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },
  textTap: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnTapActive: {
    width: Dimensions.get('window').width / 2.7,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  textTapActive: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  itemLogo: {
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    padding: 10,
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
    height: '90%',
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
