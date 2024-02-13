import { View, Text } from "react-native"
import { Link } from "expo-router"
import React from 'react'

const HomePage = () => {
    return (
        <View>
            <Link href="/home/add/addTask">Add Task</Link>
        </View>
    )
}

export default HomePage
