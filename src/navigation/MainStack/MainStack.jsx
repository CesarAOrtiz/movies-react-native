import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MovieList from "../../screens/MovieList";
import MovieDetail from "../../screens/MovieDetail";

const Stack = createStackNavigator();

const options = {
    headerStyle: {
        backgroundColor: "white",
    },
    headerTintColor: "#4e73df",
    headerTitleStyle: {
        fontWeight: "bold",
    },
};

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={options}>
                <Stack.Screen
                    name="Home"
                    component={MovieList}
                    options={{
                        title: "Movies Inc",
                        headerTitleStyle: {
                            fontSize: 28,
                        },
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={MovieDetail}
                    options={({ route }) => ({
                        title: route.params.title,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
