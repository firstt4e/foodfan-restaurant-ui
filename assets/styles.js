import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // Use Any Screen
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 99, 71, 0.5)',
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
  Text: {
    fontFamily: 'Kanit-Light',
  },

  // HomeScreen Style Start
  SwiperFlatContailner: {
    // width: '100%',
    // height: 'auto's
    padding: 10,
  },
  waitingOrder: {
    backgroundColor: 'rgba(250 ,250 ,250 ,1)',
    position: 'absolute',
    width: '90%',
    height: 80,
    bottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(211, 211, 211, 1)',
    elevation: 10,
  },
  // HomeScreen Style End

  // RandomMenu Style Start
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  randomMenuCardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  randomMenuCard: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  randomMenuCardImgWrapper: {
    flex: 1,
  },
  // cardImg: {
  //   height: '100%',
  //   width: '100%',
  //   alignSelf: 'center',
  //   borderRadius: 8,
  //   borderBottomRightRadius: 0,
  //   borderTopRightRadius: 0,
  // },
  // cardInfo: {
  //   flex: 2,
  //   padding: 10,
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   borderLeftWidth: 0,
  //   borderBottomRightRadius: 8,
  //   borderTopRightRadius: 8,
  //   backgroundColor: '#fff',
  // },
  randomMenuCardTitle: {
    fontWeight: 'bold',
  },
  randomMenuCardDetails: {
    fontSize: 12,
    color: '#444',
  },
  // RandomMenu Style End

  // Profile Screen Style Sart

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Kanit-Regular',
  },
  // Profile Screen Style End

  // ContactUs Screen Style Start
  contactUsInnerContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  contactUsMainHeaderContainer: {
    backgroundColor: 'white',
  },
  mainCenterContainer: {
    marginTop: 20,
  },
  contactUsMenuItem: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Kanit-Regular',
  },
  contactUsMenuItemText: {
    marginLeft: 10,
    fontFamily: 'Kanit-Regular',
  },
  // ContactUs Screen Style End

  // ShopDetail Srceen Start
  mainHeaderContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  mainBodyContainerShop: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    // borderRadius: 10
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  // coverContainer: {
  //     width: '100%',
  //     height: '100%',
  //     borderRadius: 10,
  // },
  shopImage: {
    flex: 1,
    position: 'relative',
    width: '100%',
    borderRadius: 10,
  },
  shopImageDetail: {
    width: '90%',
    height: 80,
    position: 'absolute',
    left: '5%',
    bottom: -50,
    zIndex: 1,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  bodyContentContainer: {
    flex: 2,
    marginTop: 0,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  shopCardInfo: {
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardTitleDetails: {
    fontSize: 12,
    color: '#444',
  },
  iconDetail: {
    color: 'rgba(150, 150, 150, 1)',
    marginRight: 5,
  },
  cardDetailsContainer: {
    marginTop: 20,
  },
  cardDetailTitleContent: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  cardDetailContent: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  navigateBtn: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ShopDetail Srceen End

  // FoodOrder Screen Start

  mainBodyContainerFoodOrder: {
    flex: 1.5,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    marginBottom: 5,
    backgroundColor: 'white',
    // borderRadius: 10
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  mainFooterContainer: {
    flex: 2,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  headerOption: {
    width: '100%',
    backgroundColor: 'rgba(111, 111, 111, 0.1)',
    padding: 10,
    borderRadius: 10,
  },
  foodImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  checkbox: {},
  quantityBtn: {
    backgroundColor: 'tomato',
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    fontFamily: 'Kanit-Bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  orderBtnContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderBtn: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // FoodOrder Screen End

  // PaymentFrontStore & PaymentMedthod Screen Start
  cardsWrapper: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 10,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRightWidth: 0,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  payFrontCardTitle: {
    fontSize: 15,
    fontFamily: 'Kanit-Bold',
  },
  cardDetails: {
    fontFamily: 'Kanit-Regular',
    fontSize: 12,
    color: '#444',
  },
  // PaymentFrontStore & PaymentMedthod Screen End
});

export default styles;
