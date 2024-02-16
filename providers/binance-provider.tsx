import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {throttle} from "@/utils/throttle";
import {CandlestickData} from "@/types/chart.interface";
import {BinanceData} from "@/types/binance.interface";

interface BinanceProviderProps {
    data: BinanceData[] | null
    chartData: CandlestickData[] | null
    currentPrice: number | null

}
export const BinanceContext = createContext<BinanceProviderProps>({
    data: null,
    chartData: null,
    currentPrice: null
});

export const BinanceProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [data, setData] = useState<BinanceData[] | null>(null);
    const [chartData, setChartData] = useState<CandlestickData[] | null>(null);
    const [currentPrice, setCurrentPrice] = useState<number | null>(null);
    const convertToCandlestickData = (trade: BinanceData) => {
        return {
            x: new Date(trade.E),
            open: parseFloat(trade.k.o),
            close: parseFloat(trade.k.c),
            high: parseFloat(trade.k.h),
            low: parseFloat(trade.k.l)
        };
    };

    const onNewTrade = throttle<BinanceData>((trade) => {
        setData(prev => prev ? ([trade, ...prev]) : [trade]);
        setChartData(prev => prev ? ([convertToCandlestickData(trade), ...prev]) : [convertToCandlestickData(trade)]);
        setCurrentPrice(parseFloat(trade.k.c));
    }, 0);


    useEffect(() => {
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');

        ws.onmessage = e => {
            const trade = JSON.parse(e.data) as BinanceData;
            onNewTrade(trade);

        }

        return () => {
            ws.close();
        }
    })


    return (
        <BinanceContext.Provider value={{data, chartData, currentPrice}}>
            {children}
        </BinanceContext.Provider>
    )
}