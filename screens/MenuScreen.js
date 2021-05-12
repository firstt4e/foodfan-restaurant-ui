import React , { useEffect, useState }from 'react';
import { View, Text, Button, FlatList, StyleSheet,ActivityIndicator } from 'react-native';
// import {data} from '../model/data';
import CardOrder from '../components/CardOrder';

const MenuScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <CardOrder 
                itemData={item}
                onPress={()=> navigation.navigate('ManageMenuScreen', {itemData: item })}
            />
        );
    };

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://foodfan-server.herokuapp.com/OrderMenu/OrderMenuAll')//
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
      return (
        <View style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
          
          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={renderItem}
          />
        )}
      </View>
    );
  };
  
  export default MenuScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: '90%',
      alignSelf: 'center'
    },
  });