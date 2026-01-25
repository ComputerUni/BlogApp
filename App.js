import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  NavigationContainer,
  createStaticNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CreateScreen from "./screens/CreateScreen";
import { Provider } from "./context/BlogContext";
import ShowScreen from "./screens/ShowScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import EditScreen from "./screens/EditScreen";
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blog Uygulaması" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>
          <Stack.Screen name="Create" component={CreateScreen}></Stack.Screen>
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <Feather name="edit-2" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>
          <Stack.Screen name="Edit" component={EditScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
