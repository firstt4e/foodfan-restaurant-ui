import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/Feather';

export default class StatusOfOrder extends Component {
  state = {
    modalVisible: false,
    country: '--เลือก--',
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styless.centeredView}>
            <View style={styless.modalView}>
              {/* DropDown */}
              {/* <DropDownPicker
                items={[
                  {
                    label: '--เลือก--',
                    value: '--เลือก--',
                    // icon: () => <Icon name="flag" size={18} color="#900" />,
                    hidden: true,
                  },
                  {
                    label: 'สั่งผิดเมนู',
                    value: 'สั่งผิดเมนู',
                    // icon: () => <Icon name="flag" size={18} color="#900" />,
                    // hidden: true,
                  },
                  {
                    label: 'ต้องการเปลี่ยนร้าน',
                    value: 'ต้องการเปลี่ยนร้าน',
                  },
                  {
                    label: 'ไม่กินแล้ว',
                    value: 'ไม่กินแล้ว',
                  },
                  {
                    label: 'อื่นๆ',
                    value: 'อื่นๆ',
                  },
                ]} */}
                {/* defaultValue={this.state.country}
                containerStyle={{height: 40, width: 200}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  this.setState({
                    country: item.value,
                  })
                }
              /> */}
              {/* DropDown */}
              <Text style={styless.modalText}>Hello World!</Text>
              <Pressable
                style={[styless.button, styless.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styless.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          onPress={() => this.setModalVisible(true)}
          style={{
            height: 28,
            backgroundColor: '#fff',
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 40,
            justifyContent: 'center',
          }}>
          <View>
            <Text
              style={{
                color: 'red',
                alignSelf: 'center',
                fontSize: 13,
                fontFamily: 'Kanit-Regular',
              }}>
              ยกเลิกคำสั่งซื้อ
            </Text>
          </View>
        </Pressable>
      </>
    );
  }
}

const styless = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    height: 400,
    width: 300,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
