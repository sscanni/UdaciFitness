import React from 'react';
import { Text, View } from 'react-native';
import AddEntry from './components/addentry';
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { red } from "./utils/colors";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}


