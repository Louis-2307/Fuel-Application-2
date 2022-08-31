import { StyleSheet } from "react-native";
import { RotateInDownLeft } from "react-native-reanimated";

export const styles = StyleSheet.create({
  form: {
    margin: 30,
    marginTop: 60,
    flex: 1,
    justifyContent: "center",
    position: "relative",
    //alignItems: 'center',
  },
  inputsecond2: {
    width: "100%",
    height: "5%",
    borderColor: "black",
    color: "black",
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    marginTop: 40,
  },
  labelsecond: {
    marginTop: 30,
    //fontSize: 18,
    left: "45%",
  },
  label1: {
    right: -100,
  },
  label2: {
    left: 90,
    bottom: 20,
    fontSize: 25,
  },
  label0: {
    left: 1,
  },
  label3: {
    left:50,
  },
  label4: {
    left:50,
    fontWeight: "bold",
    fontSize: 20
  },
  label5: {
    left:30,
    fontWeight: "bold",
    fontSize: 20
  },
  button1: {
    left: 220,
    backgroundColor: "lightgray",
    color: "black",
    width: 150,
    top: -40,
  },
  button2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 120,
    bottom: 35,
    backgroundColor: "lightgray",
    color: "black",
    width: 250,
  },
  buttonsecond: {
    width: "100%",
    height: "30%",
    top: 10,
    color: "black",
    marginBottom: 20,
  },

  listItem: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#ccc",
  },
  listItem1: {
    flexDirection: "column",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  screen: { padding: 50 },

  button: {
    width: "40%",
    alignContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: "top",
  },
  buttonContainer: {
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: 40,
  },
  signOutButton: {
    paddingVertical: 40,
  },
  createListButton: {
    position: "absolute",
    width: 10,
    bottom: 10,
    left: "70%",
    borderColor: "black",
    color: "black",
    backgroundColor: "black",
    padding: 10
  },
  View1: {
    top: 1,
    marginBottom: 100,
  },
  form1: {
    margin: 30,
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    //alignItems: 'center',
  },
  form3: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 1,
    flex: 1,
    justifyContent: "center",
    //alignItems: 'center',
  },
  flatlist:{
    top: -35,
  },
  flatlist1:{
    top: -25,
    height: 600
  },
  box:{
   display: "flex",
   flexDirection: "row",
   justifyContent: "space-around",
   bottom: 15
  },
  box1: {
    borderWidth: 3,
    borderColor: "black",
    width: 130,
    height: 70,
    alignItems: "center",
    left: -30
  },
  box2: {
    right: 70,
    with: 200,
  },
  box3:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  bold:{
    fontWeight: "bold"
  },
  paddingbottom:{
    paddingBottom: 40
  }
});
