import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Picker,
  selectedValue,
  setSelectedValue
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler';

const api = require('../webservice');
const bodyParameters = {
  product_id: '6031691ce603ec41b928938d',
};

const EditProfileScreen = () => {
  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  const {colors} = useTheme();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const [textInputNameTH, setTextInputNameTH] = useState('');
  const [textInputNameENG, setTextInputNameENG] = useState('');
  const [textInputPrice, setTextInputPrice] = useState('');
  const [textInputCount, setTextInputCount] = useState('');
  const [selectedValueType, setSelectedValueType] = useState("Food");
  const [selectedValueSubType, setSelectedValueSubType] = useState("Fastfood");

  const [text, setText] = React.useState('');

  const checkTextInput = () => {
   
    if (!textInputNameTH.trim()) {
      alert('โปรดใส่ชื่อภาษาไทย');
      return;
    }
    if (!textInputNameENG.trim()) {
      alert('โปรดใส่ชื่อภาษาอังกฤษ');
      return;
    }
    
    if (!textInputPrice.trim()) {
      alert('โปรดใส่ราคาสินค้า');
      return;
    }
    if (!textInputCount.trim()) {
      alert('โปรใส่จำนวนสินค้า');
      return;
    }
    if (!selectedValueType.trim()) {
      alert('โปรเลือกประเภทสินค้า');
      return;
    }
    if (!selectedValueSubType.trim()) {
      alert('โปรเลือกหมวดสินค้า');
      return;
    }
   //Successfully
    alert('เพิ่มสินค้าสำเร็จ');
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>อัพโหลดรูปภาพสินค้า</Text>
        <Text style={styles.panelSubtitle}>เลือกภาพสินค้าของคุณ</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>ถ่ายรูป</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>เลือกจากแกลลอรี่</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>ยกเลิก</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <ScrollView>
    <View style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
        }}>

        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            ข้อมูล
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold'}}>ชื่อสินค้า* <Text style={{ fontSize: 18, fontWeight: 'normal'}}>(2-1000ตัวอักษร)</Text> </Text>
       
        <View style={styles.action}>
          {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
          <TextInput
            placeholder="TH"
            placeholderTextColor="#666666"
            onChangeText={
              (value) => setTextInputNameTH(value)
              }
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          {/* <FontAwesome name="user-o" color={colors.text} size={20} /> */}
          <TextInput
            placeholder="ENG"
            placeholderTextColor="#666666"
            onChangeText={
              (value) => setTextInputNameENG(value)
              }
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>

        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            ภาพสินค้า
          </Text>

        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#53aada"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#53aada',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          </View>

          <View style={styles.picker1}>
           <Text style={{ fontWeight: 'bold'}}>ประเภทสินค้า</Text>
           <Picker
           selectedValueType={selectedValueType}
           style={{ height: 50, width: 100 }}
           onValueChange={(itemValueType, itemIndex) => setSelectedValueType(itemValueType)}
           >
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Dessert" value="Dessert" />
          </Picker> 

          <Text style={{ fontWeight: 'bold'}}>หมวดสินค้า</Text>
           <Picker
            selectedValueSubType={selectedValueSubType}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValueSubType, itemIndex) => setSelectedValueSubType(itemValueSubType)}
           >
          <Picker.Item label="Fastfood" value="Fastfood" />
          <Picker.Item label="Fried" value="Fried" />
          </Picker> 
          </View>

          <View style={styles.picker1}>
          <Text style={{ fontWeight: 'bold'}}>ราคาสินค้า</Text>
          <TextInput style = {styles.text}
          placeholder="0"
          onChangeText={
          (value) => setTextInputPrice(value)
          }
          underlineColorAndroid="transparent"
          style={styles.text}
          keyboardType = 'numeric'
         />
        <Text style={{ fontWeight: 'bold'}}>จำนวนสินค้า</Text>
          <TextInput style={ styles.text }
             placeholder="0"
             onChangeText={
             (value) => setTextInputCount(value)
             }
             underlineColorAndroid="transparent"
             style={styles.text}
             keyboardType = 'numeric'
          />
          </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle} onPress={checkTextInput} >เพิ่มสินค้า</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  picker1: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
});
