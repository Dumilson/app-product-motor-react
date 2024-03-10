import React from 'react'
import { Image, Text, View } from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Feather from "@expo/vector-icons/Feather"
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../../styles/Style'


const Detail = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <Feather name="chevron-left" color={"#FFF"} size={25} />
                </TouchableOpacity>
                <Feather name="shopping-cart" color={"#FFF"} size={25} />
            </View>
            <Image source={require('../img/2.png')} style={styles.img}/>
            <View style={styles.cont3}>
                <Text style={styles.title}>
                    Maxx Scoote
                </Text>
                <Text style={styles.subTitle}>
                    Model S1
                </Text>
                <View style={styles.cont2}>
                    <Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>
                        Colors
                    </Text>
                    <View style={styles.selected}>
                        <View style={styles.c1} />
                    </View>
                    <View style={styles.c2} />
                    <View style={styles.c3} />
                </View>

                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectutur adipsing elit, sed do eiusmod
                    tempor inciduent ut labore et dolore magna
                </Text>
                <View style={styles.cont1}>
                    <FontAwesome name="heart-o" color={"#000"} size={25} />
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.btn}>
                        <Text style={styles.btnText}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Detail
