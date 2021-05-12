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
      orderDetail: [],
      productList: [],
      isLoading: false,
    };
  }

  getShopFromApi = filter => {
    this.setState({isLoading: true});
    api
      .getOrderall(bodyParameters)
      .then(Response => {
        console.log(Response.data);
        let st = Response.data;
        this.setState({
          orderDetail: st,
          isLoading: false,
        });
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
          <View style={styles.itemBody}>
            <Text style={styles.itemName}>
              {item.order_detail[0].product_name.name.th}
              {item.order_detail[0].detail[0].data[0].label}
              {'\b'}
              <Text style={styles.itemsubName}>
                x {item.order_detail[0].quantity}
              </Text>
            </Text>
            <Text style={styles.itemsubName}>
              ขนาด : {item.order_detail[0].detail[1].data[0].label}
              {'\n'}
              รสชาติ : {item.order_detail[0].detail[2].data[0].label}
            </Text>
            <Text style={styles.itemName}>
              {item.order_detail[1].product_name.name.th}
              {item.order_detail[1].detail[0].data[0].label}
              {'\b'}
              <Text style={styles.itemsubName}>
                x {item.order_detail[1].quantity}
              </Text>
            </Text>
            <Text style={styles.itemsubName}>
              ขนาด : {item.order_detail[1].detail[1].data[0].label}
              {'\n'}
              รสชาติ : {item.order_detail[1].detail[2].data[0].label}
            </Text>
          </View>
        </View>
      );
    }
  };
  render() {
    const {orderDetail} = this.state;
    const {goBack} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
        <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banners/eBeSim-banner1.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity style={styles.btnTap} disabled>
            <Text style={styles.textTab}>เมนูอาหาร</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={orderDetail} renderItem={this.renderItem} />
        <View style={{marginHorizontal: 50, marginBottom: 20}}>
          <Button title="เสร็จแล้ว" color="#6666FF" onPress={() => goBack()} />
        </View>
      </SafeAreaView>
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
    fontSize: 35,
  },
  btnTapActive: {
    width: Dimensions.get('window').width / 3.7,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
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
    fontSize: 24,
    fontFamily: 'kanit',
  },
  itemsubName: {
    color: 'grey',
    fontSize: 20,
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
