import { View, Text, Button, StyleSheet, Switch, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import CheckboxList from 'rn-checkbox-list';


const ManageMenuScreen = ({route,navigation}) => {
  const {name} = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const data = [{ id: 1, name: 'หมู' }, { id: 2, name: 'หมูกรอบ' }, { id: 3, name: 'ไก่' }, { id: 4, name: 'เนื้อ' }, { id: 5, name: 'กุ้ง' }, { id: 6, name: 'หมึก' }, { id: 7, name: 'ไข่เจียว' }, { id: 8, name: 'ไข่ดาว' }, { id: 9, name: 'ไข่เค็ม' }, { id: 10, name: 'ไข่เยี่ยวม้า' }];
  return (
    <ScrollView>
      <View style={styles.card} ><Image
        source={require('../assets/banners/food-banner5.jpg')}
        resizeMode="cover" />
      </View>

      <View style={styles.card} >
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>{name} ข้าวผัด</Text>

      </View>


      <View style={styles.cardInfo} >
        <CheckboxList
          theme="red"
          listItems={data}
          onChange={({ ids, items }) => console.log('My updated list :: ', ids)}
          listItemStyle={{ borderBottomColor: '#eee', borderBottomWidth: 1 }}
          checkboxProp={{ boxType: 'square' }} // iOS (supported from v0.3.0)
          onLoading={() => <LoaderComponent />}
        />
      </View>
      <View>
        <Button
          title="บันทึกข้อมูล"
          onPress={() => Alert.alert('บันทึกข้อมูลสำเร็จ')}
        />
      </View>



    </ScrollView>






  );

};

export default ManageMenuScreen;

const styles = StyleSheet.create({
  cardInfo: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    padding: 15,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    minHeight: 60,
    elevation: 2,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    overflow: "hidden",
    position: 'relative',
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    padding: 15,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    minHeight: 60,
    elevation: 2,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    overflow: "hidden",
    position: 'relative',
  },

});
