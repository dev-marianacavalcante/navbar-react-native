import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function DetailsScreen({navigation}) {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
              ? 'settings'
              : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        barStyle: { background: '#694fad'},
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: 'Início' }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ tabBarLabel: 'Configurações' }}
        />
      </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={
            {
              title: 'Overview',
              headerStyle: {
                backgroundColor: '#f4511e',
          },
              headerTintColor: '#fff',
              headerTitleStyle: {fontWeight: 'bold'}
              ,}} />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
