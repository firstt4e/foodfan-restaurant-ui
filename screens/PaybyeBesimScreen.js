import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const PaybyeBesimScreen = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={styles.head}>จ่ายผ่าน eBeSim App</Text>
        </View>

        <TextInput
          style={styles.text}
          value={text}
          placeholder="ใส่จำนวนเงิน"
          onChangeText={text => setText(text)}
          keyboardType="number-pad"
        />
        <View style={styles.button}>
          <Button
            title="สร้าง QR รับเงิน"
            onPress={() =>
              navigation.navigate('QReBeSim', {
                itemId: text,
                otherParam: 'สร้าง QR CODE สำเร็จ',
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaybyeBesimScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  outerContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'rgba(111, 111, 111, 0.5)',
    backgroundColor: 'rgba(255, 99, 71, 0.5)',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  head: {
    fontSize: 20,
    marginTop: 30,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
