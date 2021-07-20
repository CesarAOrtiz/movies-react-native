import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail/MovieDetail";

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
export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={options}>
                <Stack.Screen
                    name="Home"
                    options={{
                        title: "Movie Inc",
                        headerTitleStyle: {
                            fontSize: 24,
                        },
                    }}
                    component={MovieList}
                />
                <Stack.Screen
                    name="Details"
                    component={MovieDetail}
                    // initialParams={{
                    //     id: 635302,
                    //     title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
                    // }}
                    options={({ route }) => ({
                        title: route.params.title,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
