import { Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Entypo name="home" size={size} color={color} />
                  ),
            }}/>
            <Tabs.Screen name="calendar" options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Entypo name="calendar" size={size} color={color} />
                  ),
            }}

            />
            <Tabs.Screen name="profile" options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Entypo name="user" size={size} color={color} />
                  ),
            
            }}
            />
            
        </Tabs>
    )
}