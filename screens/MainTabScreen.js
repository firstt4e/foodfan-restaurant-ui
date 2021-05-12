import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
//import NotificationScreen from './NotificationScreen';

import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import OrderScreen from './OrderScreen';
import DetailOrderScreen from './DetailOrderScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
//HOMESCREEN
import ConfirmScreen from './ConFrimBuyPoint';
import PaybyeBesimScreen from './PaybyeBesimScreen';
import PaypromptpayScreen from './PaypromptpayScreen';
import QReBeSim from './QReBeSim';
import QRpromptpay from './QRpromptpay';
import TestChart from './TestChart';
import AddProductScreen from './AddProductScreen';
import Shopmanage from './Shopmanage';
import DashBoardScreen from './DashBoardScreen';
import CardListScreen from './CardListScreen';
import MenuScreen from './MenuScreen';
import DecisionScreen from './DecisionScreen';
import ManageMenuScreen from './ManageMenuScreen';
import NewOrderScreen from './NewOrderScreen';
import MyOrderScreen from './MyOrderScreen';
import {MyOrderDetails} from './MyOrderDetails';
//BuyPointScreen
import CartScreen from './CartScreen';
import ConFrimBuyPoint from './ConFrimBuyPoint';
//import CardItemDetails from './CardItemDetails';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PointStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#FF6347',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Order',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-list" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Foodfan',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={require('../assets/banners/chakuma.jpg')}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="Shopmanage"
        component={Shopmanage}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="AddProductScreen"
        component={AddProductScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="ConfirmScreen"
        component={ConfirmScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="PaybyeBesimScreen"
        component={PaybyeBesimScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="PaypromptpayScreen"
        component={PaypromptpayScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="QReBeSim"
        component={QReBeSim}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="QRpromptpay"
        component={QRpromptpay}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="TestChart"
        component={TestChart}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="DecisionScreen"
        component={DecisionScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="ManageMenuScreen"
        component={ManageMenuScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="NewOrderScreen"
        component={NewOrderScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="MyOrderDetails"
        component={MyOrderDetails}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      
    </HomeStack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Notifications"
      component={OrderScreen}
      options={{
        title: 'รายการสั่งซื้อ',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <NotificationStack.Screen
      name="DetailOrderScreen"
      component={DetailOrderScreen}
      options={({route}) => ({
        headerBackTitleVisible: false,
        headerTitle: false,
        headerTransparent: true,
        headerTintColor: '#fff',
      })}
    />
  </NotificationStack.Navigator>
);



const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
