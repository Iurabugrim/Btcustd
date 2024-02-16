import {useContext} from "react";
import {BinanceContext} from "@/providers/binance-provider";


export const useBTC = () => useContext(BinanceContext)