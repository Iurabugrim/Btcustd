import {StyleSheet} from 'react-native';
import {Text, View} from '@/components/Themed';
import {VictoryAxis, VictoryCandlestick, VictoryChart, VictoryTheme} from "victory-native";
import {useBTC} from "@/hooks/useBTC";
import {BinanceData} from "@/types/binance.interface";
import {useState} from "react";
import CryptoInfo from "@/components/CryptoInfo";



export default function TabOneScreen() {
    const {chartData, currentPrice} = useBTC()



    return (
        <View style={styles.container}>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 20 }}
                scale={{ x: "time" }}

            >
              <VictoryAxis  tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
              <VictoryAxis dependentAxis/>
                {chartData && (
                    <VictoryCandlestick
                        style={{
                            data: {
                                stroke: "#000000",
                                strokeWidth: 0
                            }
                        }}
                        candleRatio={0}
                        candleColors={{ positive: "#22c55e", negative: "#ef4444" }}
                        data={chartData}
                    />
                )}
            </VictoryChart>
            {!!currentPrice && (<CryptoInfo price={currentPrice} title={"BTC/USDT"} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
