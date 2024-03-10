import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
    },
    title: {
        fontSize: 25,
        fontFamily: "Montserrat_700Bold",
        marginTop: 30,
    },
    img: {
        height: "45%",
        width: "50%",
        // resizeMode: "contain",
    },
    subTitle: {
        fontSize: 20,
        color: "#FFF",
        marginTop: 10,
        fontFamily: "Montserrat_400Regular",
    },
    text: {
        fontSize: 20,
        fontFamily: "Montserrat_400Regular",
        color: "#474747",
        paddingRight: 80,
        lineHeight: 25,
    },
    btn: {
        backgroundColor: "#E24439",
        paddingHorizontal: 60,
        paddingVertical: 12,
        borderRadius: 30
    },
    btnText: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 20,
        color: "#FFF",
    },
    cont1: {
        flexDirection: 'row',
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 40
    },
    c2: {
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#529C47",
        marginHorizontal: 10
    },
    c3: {
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#529C47"
    },
    c1: {
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#E2443B"
    },
    selected: {
        borderColor: "#E2443B",
        height: 30,
        width: 30,
        borderRadius: 24,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    cont2: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginVertical: 25
    },
    cont3: {
        flex: 1,
        backgroundColor: "#FFF",
        width: "100%",
        borderRadius: 50,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: 50,
        paddingHorizontal: 20,
    },
})