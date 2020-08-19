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
const ProductItem = ({image, name, price}) => {
  return(
    <View style={styles.itemContainer}>
    <Image 
      source= {{uri: image}} 
      style= {{width: 100, height: 100}}
      esizeMode= "contain"
    />
    <Text style={styles.itemName} numberOfLines={2} >{name}</Text>
    <Text style={styles.itemPrice} >{price} USD</Text>
  </View>
  );
};

const HomeSectionComponent = () => {
  return (
    <View style={styles.bodyContainer} >
        <View style={styles.sectionContainer} >
          <Text style={styles.sectionTitle} >Mobile and Tablet</Text>
          <Image 
          source= {{uri: "https://case-up.co.uk/wp-content/uploads/2018/12/banner32.jpg"}} 
          style= {{width: 400, height: 200}}
          resizeMode= "contain"
          />
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.filterContainer}>
            <View style={styles.filterActiveButtonContainer}>
              <Text style={styles.filterActiveText}>All</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}> 
              <Text style={styles.filterInactiveText}>Smart Phone</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}>Tablet</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}>Apple Watch</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}> 
              <Text style={styles.filterInactiveText}>Samsung</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}>Oppo</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}>Nokia</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}> 
            <View>
              <ProductItem 
                image="https://24hstore.vn/images/products/2020/04/19/large/iphone-xs-max-grey.jpg"
                name= "Iphone XS Max"
                price="5000"
              />
              <ProductItem 
                image="https://24hstore.vn/images/products/2020/04/19/large/iphone-xs-max-grey.jpg"
                name= "Iphone XS Max"
                price="5000"
              />
            </View>
            <View>
              <ProductItem 
                image="https://24hstore.vn/images/products/2020/04/19/large/iphone-xs-max-grey.jpg"
                name= "Iphone XS Max"
                price="5000"
              />
              <ProductItem 
                image="https://24hstore.vn/images/products/2020/04/19/large/iphone-xs-max-grey.jpg"
                name= "Iphone XS Max"
                price="5000"
              />
            </View>
            <View>
              <ProductItem 
                image="https://24hstore.vn/images/products/2020/04/19/large/iphone-xs-max-grey.jpg"
                name= "Iphone XS Max"
                price="5000"
              />
              <ProductItem 
                image="https://24hstore.vn/images/products/2020/04/19/large/iphone-xs-max-grey.jpg"
                name= "Iphone XS Max"
                price="5000"
              />
            </View>
            <View>
              <ProductItem 
                image="https://24hstore.vn/images/products/2020/04/19/large/iphone-xs-max-grey.jpg"
                name= "Iphone XS Max"
                price="5000"
              />
              <ProductItem 
                image="https://24hstore.vn/images/products/2020/04/19/large/iphone-xs-max-grey.jpg"
                name= "Iphone XS Max"
                price="5000"
              />
            </View>
        </View>
        </ScrollView>
        <View style={styles.seeMoreContainer}>
          <Text style={styles.seeMoreText}>
            SEE MORE 636 PRODUCT..
          </Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  // body
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  listItemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
  },
  itemName: {
    fontSize: 14,
    color: "#484848",
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: "#2a2a2a",
    fontWeight: "500"
  },
  // filter
  filterContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
    borderColor: '#5a5a5a',
    borderWidth: 1
  },
  filterActiveText: {
    color: '#fff'
  },
  filterInactiveText: {
    color: '#5a5a5a'
  },
  // SEE MORE
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    alignItems: "center",
    borderTopWidth: 0.6,
    borderTopColor: "#ededed"
  },
  seeMoreText: {
    color: "#0e45b4"
  }
});

export default HomeSectionComponent;
