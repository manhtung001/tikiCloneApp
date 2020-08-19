/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeSectionComponent from './../components/HomeSectionComponent';


const HomeScreen = () => {
  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.headerContainer} >
        <View style={styles.inputContainer} >
          <FontAwesome name={"search"} size={24} color='#969696' />
          <Text style={styles.inputText} >What are you looking for?</Text>
        </View>
        <View style={styles.cartContainer} >
          <FontAwesome name={"shopping-cart"} size={24} color="#fff" />
        </View>
      </View>
      <View style={styles.bodyContainer} >
        <ScrollView>
          <HomeSectionComponent />
          <HomeSectionComponent />
          <HomeSectionComponent />
        </ScrollView>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#1e88e5",
    paddingTop: 50,
    paddingBottom: 4,
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginLeft: 10,
    flex: 1,
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 12,
  },
  inputText: {
    color: "#969696",
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  // body
  bodyContainer: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;