import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../Home/style';
import axios from 'axios';
import ProductList from '../../components/ProductList';
import { ActivityIndicator } from 'react-native-paper';
import PropTypes from 'prop-types';

const HEADER_COLOR = '#F60000';
const LOADER_COLOR = '#000';

const Home = (props) => {
  const [productDetail, setProductDetail] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://65e2be4288c4088649f4c34b.mockapi.io/productDetail');
        console.log(res.data)
        const responseData = res.data
        setProductDetail(responseData);
        setLoading(false)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image style={styles.image} resizeMode='cover' source={require('../../assets/home.jpg')} />
        <View style={styles.productText}>
          <Text style={styles.text}>Enjoy your day {'\n'}Get Upto <Text style={{ color: HEADER_COLOR }}>50% </Text> Off for you </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ?
          <View style={styles.loader}>
            <ActivityIndicator animating={true} color="#000" size="large" />
            <Text style={{ color: LOADER_COLOR }}>Loading...</Text>
          </View> :
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={productDetail}
            renderItem={({ item }) => <ProductList item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        }
      </ScrollView>
      <TouchableOpacity style={styles.plusIconStyling} onPress={() => props.navigation.navigate("Product")}>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home


Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};