import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Appearance, Pressable} from 'react-native';

import Colors from '@/constants/Colors';
import {useColorScheme} from '@/components/useColorScheme';
import {useClientOnlyValue} from '@/components/useClientOnlyValue';
import {BinanceProvider} from "@/providers/binance-provider";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <BinanceProvider>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                    headerShown: useClientOnlyValue(false, true),
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'BTC/USD',
                        tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
                    }}
                />
                <Tabs.Screen
                    name="trades"
                    options={{
                        title: 'My Trades',
                        tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
                    }}
                />
            </Tabs>
        </BinanceProvider>
    );
}
