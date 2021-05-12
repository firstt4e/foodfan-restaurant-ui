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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const api = require('../webservice');

const bodyParameters = {
  //shop_id: '6038fefc26f14f2ff2b591b6',
};

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
      productList: [],
      isLoading: false,
      count: 0,
      total: 0,
    };
  }

  getPointFromApi = filter => {
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
        //console.log(Response.data);
        let st = Response.data;
        this.setState({orderData: st});
        this.setState({isLoading: false});
      })
      .catch(error => {
        console.log(error);
        this.setState({isLoading: false});
      });
  };

  componentDidMount() {
    this.getPointFromApi();
  }
  onPressPlus = () => {
    if (this.state.count < 100) {
      this.setState({
        count: this.state.count + 1,
        total: this.state.total + 100,
      });
    }
  };
  onPressDecrease = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1,
        total: this.state.total - 100,
      });
    }
  };
  renderItem = ({item, index}) => {
    const {count} = this.state;
    const gb = 1.5;
    const point = gb * this.state.total;
    return (
      <View key={index} style={styles.itemContainer}>
        {/* <Text style={styles.itemName}>{index}</Text> */}
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => this.props.navigation.navigate('DetailOrderScreen')}
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
          <Text style={styles.itemName}>ค่าโฆษา100 บาท</Text>
          <Text style={styles.itemsubName}>ได้รับ 20 แต้ม</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              backgroundColor: '#F4EFED',
              paddingLeft: 20,
              paddingRight: 20,
              marginBottom: 3,
              borderRadius: 5,
            }}>
            {count}
          </Text>
          <View style={styles.actionBtn}>
            <TouchableOpacity onPress={this.onPressPlus}>
              <View
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginBottom: 3,
                  borderRadius: 5,
                }}>
                <Ionicons name="md-add" size={25} color="#FFF" />
              </View>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity onPress={this.onPressDecrease}>
              <View
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginBottom: 3,
                  borderRadius: 5,
                }}>
                <Ionicons name="md-remove" size={25} color="#FFF" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  render() {
    const {orderData, total} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/*  <Spinner visible={this.state.isLoading} textContent={'Loading...'} /> */}
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <Text>ซื้อแต้ม</Text>
        </View>
        <FlatList
          data={orderData}
          renderItem={this.renderItem}
          keyExtractor={item => item._id}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
            borderWidth: 2,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderColor: '#000',
            padding: '2%',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>ชำระเงินรวม</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{total} บาท</Text>
        </View>

        <View style={{marginHorizontal: 50, marginBottom: 20}}>
          <Button
            title="สั่งซื้อ"
            color="#FC934F"
            onPress={() =>
              this.props.navigation.navigate('ConFrimBuyPoint', {
                price: total,
              })
            }
          />
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
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: '#FC934F',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
