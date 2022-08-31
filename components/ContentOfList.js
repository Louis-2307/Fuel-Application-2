import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const ContentOfList = (props) => {
  return (
<TouchableOpacity activeOpacity={0.8} onPress={props.onPress.bind(this, props.id)}>
    <View style={styles.listItem1}>
      <View style={styles.listItem}>
        <Text style={styles.label0}>{props.name}</Text>
        <Text style={styles.label1}>{props.price}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.label3}>{props.description}</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={props.onMove.bind(this, props.id)}
        >
          <Text style={styles.label2}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
</TouchableOpacity>
  );
};

export default ContentOfList;
