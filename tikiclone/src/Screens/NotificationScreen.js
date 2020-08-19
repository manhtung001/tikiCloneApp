import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationItem = ({item}) => {
    return(
        <View style={styles.itemContainer}>
            <View style={styles.itemTopContainer}>
                <View style={[styles.iconTopContainer, {backgroundColor : item.type === 1 ? "#fc820a" : "pink" }]}>
                    <MaterialCommunityIcons name={item.id % 3 === 0 ? "sale" : "backup-restore"} color="#fff" size={26}/>
                </View>
                <View>
                    <View style={styles.textTopContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.itemDate}>{item.date}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.itemBottomContainer}>
                <Text style={styles.itemDetail}>{item.detail}</Text>
            </View>
        </View>
    );
};

const NotificationScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.headerContainer}>
        <View style={styles.cartContainerExtra}>
        </View>
        <Text style={styles.headerText}>Thông báo</Text>
        <View style={styles.cartContainer} >
            <FontAwesome 
            name="shopping-cart" 
            size={26}
            color="#fff"
            />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View>
            <View style={styles.buttonActiveContainer}>
                <MaterialCommunityIcons name="home" color="#949494" size={22}/>
            </View>
            <View style={styles.buttonInactiveContainer}>
                <MaterialCommunityIcons name="backup-restore" color="#949494" size={22}/>
            </View>
            <View style={styles.buttonInactiveContainer}>
                <MaterialCommunityIcons name="sale" color="#949494" size={22}/>
            </View>
        </View>
        <View style={styles.listContainer}>
            <FlatList 
            data={[
                {
                    id: 1,
                    type: 1,
                    name: 'Anker giảm khủng bố 40% duy nhất hôm nay 13/11, Cổng Thông tin điện tử Chính phủ, Văn',
                    date: '20/11/2001',
                    detail: 'Văn bản là một loại hình phương tiện để ghi nhận, lưu giữ và tru... sang chủ t..g. định. '
                },
                {
                    id: 2,
                    type: 2,
                    name: 'Nguyễn Việt Anh',
                    date: '14/11/2001',
                    detail: 'Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ và hướng tới một mục tiêu giao tiếp nhất định. '
                },
                {
                    id: 3,
                    type: 1,
                    name: 'Nguyễn Việt Anh',
                    date: '14/11/2001',
                    detail: 'Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ và hướng tới một mục tiêu giao tiếp nhất định. '
                },
                {
                    id: 4,
                    type: 2,
                    name: 'Nguyễn Việt Anh',
                    date: '14/11/2001',
                    detail: 'Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ và hướng tới một mục tiêu giao tiếp nhất định. '
                },
                {
                    id: 5,
                    type: 1,
                    name: 'Anker giảm khủng bố 40% duy nhất hôm nay 13/11, Cổng Thông tin điện tử Chính phủ, Văn',
                    date: '20/11/2001',
                    detail: 'Văn bản là một loại hình phương tiện để ghi nhận, lưu giữ và tru... sang chủ t..g. định. '
                },
                {
                    id: 6,
                    type: 2,
                    name: 'Nguyễn Việt Anh',
                    date: '14/11/2001',
                    detail: 'Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ và hướng tới một mục tiêu giao tiếp nhất định. '
                },
                {
                    id: 7,
                    type: 1,
                    name: 'Nguyễn Việt Anh',
                    date: '14/11/2001',
                    detail: 'Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ và hướng tới một mục tiêu giao tiếp nhất định. '
                },
                {
                    id: 8,
                    type: 2,
                    name: 'Nguyễn Việt Anh',
                    date: '14/11/2001',
                    detail: 'Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ và hướng tới một mục tiêu giao tiếp nhất định. '
                }
            ]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NotificationItem item={item}/>}
            />
        </View>
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
    bodyContainer: {
        flex: 1,
        flexDirection: "row"
    },
    buttonActiveContainer: {
        padding: 12,
        backgroundColor: "#fff",
        borderLeftWidth: 4,
        borderLeftColor: "#1e88e5",
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5",
    },
    buttonInactiveContainer: {
        padding: 12,
        marginLeft: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5",
    },
    listContainer: {
        flex: 1,
        borderLeftWidth: 1,
        borderLeftColor: "#e5e5e5",
    },
    itemContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomColor: "#ededed",
        borderBottomWidth: 1
    },
    itemTopContainer: {
        flex: 1,
        flexDirection: "row",
    },
    iconTopContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    itemName: {
        color: "#000",
        fontWeight: "500"
    },
    textTopContainer: {
        marginRight: 40,
        marginLeft: 8
    },
    itemDate: {
        color: "#787878",
        fontSize: 12,
        marginTop: 8
    },
    itemBottomContainer: {
        marginTop: 6
    },
    itemDetail: {
        color: "#787878",
        fontSize: 14,
    }
});

export default NotificationScreen;