import React, { Component } from "react"
import { View } from "react-native"
import { getMetricMetaInfo } from "../utils/helpers"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { red } from "../utils/colors";

export default class AddEntry extends Component {
    render() {
        //Icon is not showing with this statement:
        return <View>{ getMetricMetaInfo("bike").getIcon }</View>

        //Icon does show using this statement:
        // return <View>
        //          <View>
        //             <MaterialCommunityIcons name="bike" color={red} size={82} />
        //          </View>
        //        </View>

    }
}