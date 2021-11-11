import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 33,
    alignItems: "center",
    zIndex: 1
  },
  innerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  text: {
    fontFamily: "Roboto_900Black",
    fontSize: 23,
    color: "#db430b",
    marginLeft: 20
  },
  searchicon: {
    paddingRight: 22
  },
  headerTextWrapper: {
    marginLeft: 20,
    marginTop: 10
  },
  headerText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
    color: "#1c1c1c",
  },
  headerImageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  headerImageContainer: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 15,
  },
  headerImage: {
    width: 370,
    height: 210,
    borderRadius: 15,
  },
  overPopularListItems: {
    marginLeft: 20,
    marginTop: 15,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
    borderRadius: 15,
  },
  overPopularWrapper: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 30
  },
  overPopularText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 19,
    color: "#1c1c1c",
    marginLeft: 20
  },
  overPopularListImage: {
    width: 210,
    height: 130,
    borderRadius: 15
  },
  categoryItemWrapper: {
    marginHorizontal: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  categoryImage: {
    width: 132,
    height: 100,
    resizeMode: "contain"
  },
  categoryItemText: {
    color: "black",
    textAlign: "center",
    marginTop: -2,
    fontFamily: "Roboto_400Regular",
    fontSize: 16
  },
  bottomNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#d9d9d9',
  },
  categoryRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 60,
    marginTop: 20,
    alignItems: "center",
  },
  detailsImage: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -70
  },
  detailsImageItem: {
    width: 500,
    height: 300,
    resizeMode: "cover"
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "#edb707",
    marginTop: -50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    zIndex:0
  },
  detailsInnerContainer: {
    backgroundColor: "#d9d9d9",
    flex: 1,
    marginTop: 10,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    zIndex:1
  },
  detailsHeaderText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 25,
  },
  detailsHeaderTextWrapper: {
    marginLeft: 30,
    marginTop: 35
  },
  detailsHeaderPriceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    marginHorizontal: 30,
    marginTop: 30
  },
  detailsHeaderPriceLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  detailsInfoTextWrapper: {
    marginTop:15,
    marginLeft:25
  },
  detailsInfoText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    color:"#6779a1"
  },
  orderButtonWrapper:{
    backgroundColor: "#edb707",
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:30,
    paddingBottom:10,
    paddingTop:10,
    marginHorizontal:40,
    borderRadius:30,
    flexDirection:"row"
  },
  orderText:{
    fontFamily:"Roboto_400Regular",
    fontSize:22
  }
});