import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const ContentOfList2 = (props) => {
  return (

    <View style={styles.box3}>
      
        <Text style={styles.label0}>{props.name} * {props.price} = {props.total}</Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={props.onDeduct.bind(this, props.id)}
        >
          <Text style={styles.label4}> - </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={props.onAdd.bind(this, props.id)}
        >
          <Text style={styles.label5}> + </Text>
        </TouchableOpacity>
       
    </View>

  );
};

export default ContentOfList2;
