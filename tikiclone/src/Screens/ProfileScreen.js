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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileItem = ({icon, name}) => {
    return(
        <View style={styles.itemContainer}>
            <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e"/>
            <Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]}>{name}</Text>
            <FontAwesome name="angle-right" size={26}/>
        </View>
    );
};

const ProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.headerContainer}>
        <View style={styles.cartContainerExtra} >
           
        </View>
        <Text style={styles.headerText}>Cá nhân</Text>
        <View style={styles.cartContainer} >
            <FontAwesome 
            name="shopping-cart" 
            size={26}
            color="#fff"
            />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.userContainer}>
            <View style={styles.avatarContnainer}>
                <MaterialIcons name="person" size={26} color="#fff" />
            </View>
            <View style={styles.textContnainer}>
                <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
                <Text style={styles.authText}>Đăng nhập/Đăng kí</Text>
            </View>
            <FontAwesome name="angle-right" size={30} color="#1e88e5"/>
        </View>
        <View style={styles.divider}></View>
        <ProfileItem icon="format-list-bulleted" name="Quản lý đơn hàng" />
        <ProfileItem icon="cart-outline" name="Sản phẩm đã mua" />
        <ProfileItem icon="eye-outline" name="Sản phẩm đã xem" />
        <ProfileItem icon="heart-outline" name="Sản phẩm yêu thích" />
        <ProfileItem icon="bookmark-outline" name="Sản phẩm mua sau" />
        <ProfileItem icon="star-outline" name="Sản phẩm đánh giá" />
        <View style={styles.divider}></View>
        <ProfileItem name="Ưu đãi cho khách hàng" />
        <ProfileItem name="Cài đặt" />
        <View style={styles.divider}></View>
        <ProfileItem icon="headphones" name="Hỗ trợ" />
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    //header
    headerContainer: {
        backgroundColor: "#1e88e5",
        flexDirection: "row",
        paddingTop: 50,
        paddingBottom: 4,
        justifyContent: "space-between"
    },
    cartContainer: {
        paddingHorizontal: 20,
        alignContent: "center",
        justifyContent: "center",
    },
    cartContainerExtra: {
        paddingHorizontal: 36,
    },
    headerText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "500"
    },
    // body
        // user
    userContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 22,
        alignItems: "center"
    },
    avatarContnainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#1e88e5",
        alignItems: "center",
        justifyContent: "center"
    },
    textContnainer: {
        flex: 1,
        marginLeft: 20,
    },
    welcomeText: {
        color: "#828282"
    },
    authText: {
        color: "#1e88e5",
        fontSize: 18,
        fontWeight: "500"
    },
        // item
    itemContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 16,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    itemText: {
        flex: 1,
        fontSize: 16,
    },
    divider: {
        height: 8,
    }
});

export default ProfileScreen;