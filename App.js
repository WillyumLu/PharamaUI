import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";
import { Root } from  "native-base"

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import NewsPage from "./NewsPage";
import TreatmentPage from "./components/Treatment/TreatmentPage";
import TreatmentGene1 from "./components/Treatment/TreatmentGene1";
import TreatmentGene2 from "./components/Treatment/TreatmentGene2";
import InfoPage from "./InfoPage";
import TrialsPage from "./TrialsPage";
import SettingPage from "./SettingPage"
import AuthContext from "./contexts/AuthContext";
import { SafeAreaProvider } from 'react-native-safe-area-context';

/*
function getHeaderTitle(route) {
    // custom header title goes here
    return getFocusedRouteNameFromRoute(route) ?? 'Feed';
}
*/

const NewsStack = createStackNavigator();
export function NewsScreen() {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" component={NewsPage} />
        </NewsStack.Navigator>
    )
}



const TreatmentStack = createStackNavigator();
export function TreatmentScreen() {
    return (
        <TreatmentStack.Navigator initialRouteName="SelectPage">
                <TreatmentStack.Screen name="SelectPage" component={TreatmentPage} options={{ title: 'Treatment' }} />
                <TreatmentStack.Screen name="Gene1" component={TreatmentGene1} options={{ title: 'Tried Treatments' }}/>
                <TreatmentStack.Screen name="Gene2" component={TreatmentGene2} options={{ title: 'Tried Treatments' }}/>
        </TreatmentStack.Navigator>
    )
}

const TrialsStack = createStackNavigator();
export function TrialsScreen() {
    return (
        <TrialsStack.Navigator>
            <TrialsStack.Screen name="Trials" component={TrialsPage} />
        </TrialsStack.Navigator>
    )
}

const InfoStack = createStackNavigator();
export function InfoScreen() {
    return (
        <InfoStack.Navigator>
            <InfoStack.Screen name="Info" component={InfoPage} />
        </InfoStack.Navigator>
    )
}

const SettingStack = createStackNavigator();
export function SettingScreen() {
    return (
        <InfoStack.Navigator>
            <InfoStack.Screen name="Setting" component={SettingPage} />
        </InfoStack.Navigator>
    )
}

const AuthStack = createStackNavigator();
export function AuthScreen() {
    return (
        <AuthStack.Navigator initialRouteName={"SignIn"}>
            <AuthStack.Screen name="SignIn" component={LoginPage} />
            <AuthStack.Screen name="SignUp" component={SignupPage} />
        </AuthStack.Navigator>
    )
}

const MainTab = createBottomTabNavigator();
export function MainScreen() {
    return (
        <Root>
        <MainTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case "News":
                            iconName = "ios-list-box";
                            break;
                        case "Treatment":
                            iconName = "ios-beaker";
                            break;
                        case "Trials":
                            iconName = "md-medkit";
                            break;
                        case "Info":
                            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                            break;
                        case "Setting":
                            iconName = "ios-settings";
                            break;
                        default:
                            console.log("Invalid focused tab");
                            throw "Invalid focused tab";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}
        >
            <MainTab.Screen name="News" component={NewsScreen} />
            <MainTab.Screen name="Treatment" component={TreatmentScreen}   />
            <MainTab.Screen name="Trials" component={TrialsScreen} />
            <MainTab.Screen name="Setting" component={SettingScreen} />
        </MainTab.Navigator>
        </Root>
    )
}

const RootStack = createStackNavigator();
export default function App() {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "SignIn":
                    return {
                        ...prevState,
                        hasAuth: true,
                    };
                default:
                    console.log("Invalid auth action");
                    throw "Invalid auth action";
            }
        },
        {
            hasAuth: false,
        }
    );

    return (
        <SafeAreaProvider>
        <AuthContext.Provider
            value={{
                signIn: data => dispatch({ type: "SignIn" }),
            }}
        >
            <NavigationContainer>
                <RootStack.Navigator>
                    {state.hasAuth ? (
                        <RootStack.Screen
                            name="Landing"
                            component={MainScreen}
                            options={({ route }) => ({
                                //headerTitle: getHeaderTitle(route),
                                headerShown: false
                            })}
                        />
                    ) : (
                        <RootStack.Screen
                            name="Landing"
                            component={AuthScreen}
                            options={({ route }) => ({
                                //headerTitle: getHeaderTitle(route),
                                headerShown: false
                            })}
                        />
                    )}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
        </SafeAreaProvider>
    );
}
