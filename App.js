import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, FlatList, Text, Button, SafeAreaView, Alert } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "./styles/styles";
import ContentOfList from "./components/ContentOfList";
import ContentOfList2 from "./components/ContentOfList2";
import { WebView } from "react-native-webview";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";



//------------------------------------------------------------------------------------------------------
export const FirstScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    getJSONData()      
  }, []);

  const getJSONData = () => {
    return fetch('https://jsonblob.com/api/jsonBlob/1000842988548800512')
      .then((response) => response.json())
      .then((json) => {
        setReadData(json.data)
      })
      .catch((error) => {
        console.error(error);
      });
      
  };

  const addItemHandler = (id) => {
    readData.filter((item) => {
      if(item.itemId == id){
        route.params.onSee({
          id: item.itemId,
          name: item.name,
          price: item.price,
          count: 1,
        });
        navigation.navigate("ThirdScreen");
      }
    })
    
  };

  return (
    <View style={styles.form}>
     <View style={styles.button1}>
        <Button
          style={styles.createListButton}
          title="View Cart"
          onPress={() =>
            navigation.navigate("ThirdScreen")
          }
        />
      </View>

    <FlatList  
    style={styles.flatlist}
      data={readData}
      renderItem={(itemData) => (
        <ContentOfList
          id={itemData.item.Key}
          name={"Item Name: " + itemData.item.name}
          price={"Price: " + itemData.item.price}
          description={"Description: " + itemData.item.description}
          onPress={() => {navigation.navigate("SecondScreen",{ id: itemData.item.itemId})}}
          onMove={() => {addItemHandler(itemData.item.itemId)}}
         
        />
      )}
    />
  </View>
);
};
//------------------------------------------------------------------------------------------------------
export const SecondScreen = () => {
  const route = useRoute();
  const [Data, setData] = useState({});


useEffect(() => {
  getJSONObject();
}, []);

const getJSONObject = () => {
  return fetch('https://jsonblob.com/api/jsonBlob/1000842988548800512')
    .then((response) => response.json())
    .then((json) => {
      json.data.forEach(element => {
        if(element.itemId == route.params.id){
          setData(element)
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const customHTML = `
<body style="display:flex; flex-direction: column;justify-content: center; 
  align-items:center; background-color: white; color:black; height: 100%;">  
  <div style="display: flxe; flex-direction: row ; jjustify-content: space-between" >
    <p style="display: inline-block ;font-size:50px; padding: 10px; padding-right: 70px;" id="h1_element">
      Item Name: ${Data.name}
    </p>
    <p style="display: inline-block ; font-size:50px; padding: 10px ; padding-left: 70px" id="h2_element">
      Price: ${Data.price}
    </p>
  </div>
    <p style="display: block; font-size:50px; padding: 50px; 
    text-align: center;" id="h2_element">
      Description: ${Data.description}
    </p>
    <p style="display: block; font-size:50px; padding: 50px; 
    text-align: center;" id="h2_element">
      Manufacturer: ${Data.manufacturer}
    </p>
    <img src=${Data.Image} alt=${Data.name}>
  
  </body>`;


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView 
          source={{ html: customHTML }}     
      />
    </SafeAreaView>
);
};



//------------------------------------------------------------------------------------------------------
export const ThirdScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
 
  const [readData, setReadData] = useState([]);
  const [totalNumber, setTotalNumber] = useState(0);
  const [totalDeducted, setTotalDeducted] = useState(0);
  const [totalPromotion, setTotalPromotion] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
 
  
  function onNewNoteSaved(noteItem) {  
        setReadData(readData => [...readData, { itemId: noteItem.id, name: noteItem.name, price: noteItem.price, count: noteItem.count }]);
        
        firstCalTotal(noteItem)
  }

  const increaseItemNumber = (itemID) => {
    readData.filter((item) => {
      if(itemID == item.itemId){
        item.count += 1
        calTotal()
      }
    })
  }

  const descreaseItemNumber = (itemID) => {
    readData.filter((item) => {
      if(itemID == item.itemId){
        if (item.count > 0) {
          item.count -= 1
          calTotal()
        }else {
          let filterArray = readData.filter((item) => item.itemId != itemID);
          setReadData(filterArray);  
            setTotalNumber(0)
            setTotalDeducted(0)
        }
      }
    })
  }

  const purchaseItem = () => {
    setReadData([])
    setTotalNumber(0)
    setTotalDeducted(0)
    setTotalPromotion(0)

    Alert.alert(
      'Note Saved',
      `Successfully purchased item for ${totalPromotion}`,
      {
        text: 'Okay',
      },
      {cancelable: false},
    );
  }
  const firstCalTotal = (NoteItem) => {
    var total = totalNumber + NoteItem.price
    setTotalNumber(total)

    var deduction = 0
    if (total >= 80 && total <= 100){
      deduction = total * 0.15
        setTotalDeducted(deduction)
    }else if (total > 100){
      deduction = total * 0.20
        setTotalDeducted(deduction)
    }else if (total < 80){
       deduction = 0
      setTotalDeducted(deduction)
    }

    setTotalPromotion(total - deduction)
  }

  const calTotal =  () => { 
      var total = 0
     readData.forEach((item) => {
      total = total + (item.price * item.count)
      })
      setTotalNumber(total) 
      var deduction = 0
    if (total >= 80 && total <= 100){
      deduction = total * 0.15
        setTotalDeducted(deduction)
    }else if (total > 100){
      deduction = total * 0.20
        setTotalDeducted(deduction)
    }else if (total < 80){
       deduction = 0
      setTotalDeducted(deduction)
    }

    setTotalPromotion(total - deduction)
    
  }
  

  return (
    <View style={styles.form}>
      <View style={styles.button2}>
        <Button
          style={styles.buttonsecond}
          title="Go To List"
          onPress={()=> {navigation.navigate("FirstScreen", {onSee: onNewNoteSaved})}}/>
        <Button
          style={styles.buttonsecond}
          title="Purchase"
          onPress={()=> {purchaseItem()}}/>
      </View>
   
      <View style={styles.Viewflatlist1}>
      <FlatList 
      style={styles.flatlist1} 
      data={readData}
      renderItem={(itemData) => (
        <ContentOfList2
          id={itemData.item.itemId}
          name={itemData.item.name} 
          price={itemData.item.price} 
          total= {itemData.item.price * itemData.item.count}
          onDeduct={() => {descreaseItemNumber(itemData.item.itemId)}}
          onAdd={() => {increaseItemNumber(itemData.item.itemId)}}
        />
      )}
    />
    </View>

    <View style={styles.box}>
      <View style={styles.box1}>
        <Text style={styles.bold}>
         Discount
        </Text>
        <Text>80 or more: 15%</Text>
        <Text>100 or more: 20%</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.paddingbottom}>
        Final Total: ${totalNumber}
        </Text>
        <Text>
          Deducted: ${totalDeducted}
        </Text>
      </View>  
    </View>
  </View>
  );
};

ThirdScreen.navigationOptions = {
  headerTitle: "Add Place",
};
//------------------------------------------------------------------------------------------------------
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{
            title: "Cart List",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{
            title: "List",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            title: "View Cart",
            headerTitleAlign: "center",
          }}
        />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}
