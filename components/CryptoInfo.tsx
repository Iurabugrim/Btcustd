import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from './Themed';

interface CryptoInfoProps {
    price: number;
    title: string;
}


export default function CryptoInfo({price, title}: CryptoInfoProps) {
    return (
        <View style={styles.padding}>
            <View style={styles.main}>
                <View style={styles.left_block}>
                    <View style={styles.left_block_title}>
                        <Text style={styles.title}>
                            {title}

                        </Text>
                        <Text style={styles.price_link}>
                            Bitcoin Price
                        </Text>
                    </View>
                    <View style={styles.left_block_tokens}>
                        <Text style={styles.tokens}>
                            POW
                        </Text>
                        <Text  style={styles.tokens}>
                            Vol
                        </Text>
                    </View>
                </View>
                <View style={styles.prices_block}>
                    <Text style={styles.main_price}>
                        {price}
                    </Text>
                    <Text style={styles.green_price}>
                        $ {price}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    padding: {
      padding: 10
    },
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#3f3f46",
        borderRadius: 10,
        margin: 10,
        width: "100%"
    },
    left_block: {
        backgroundColor: "transparent",

    },
    left_block_title: {
        backgroundColor: "transparent",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-end"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price_link: {
        color: "#7dd3fc"
    },
    left_block_tokens: {
        marginTop: 10,
        backgroundColor: "transparent",
        flexDirection: "row",
        gap: 10
    },
    tokens: {
        backgroundColor: "#d97706",
        padding: 5,
        borderRadius: 20,
        color: "#fde047",
        fontWeight: "bold"
    },
    prices_block: {
        backgroundColor: "transparent",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    main_price: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    green_price: {
        color: "#22c55e",
        fontSize: 20,
        fontWeight: 'bold',
    }
});
