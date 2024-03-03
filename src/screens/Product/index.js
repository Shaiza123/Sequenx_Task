import { KeyboardAvoidingView, ScrollView, View, Image, Text,Alert,Platform} from 'react-native'
import React, { useRef } from 'react'
import Textinput from '../../components/Textinput/index';
import * as Yup from 'yup';
import styles from '../Product/style';

const Product = () => {
    const productNameRef = useRef(null)
    const productPriceRef = useRef(null)
    const productMaterialRef = useRef(null)

    const productFormSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        price: Yup.number().typeError('Price must be a number').required('Price is required'),
        material: Yup.string().required('Material is required'),
    });

    const addProduct = (name, price, material,resetForm) => {
        Alert.alert(
            'Product is Added Successfully!',
            `Name: ${name}\nPrice: $${price}\nMaterial: ${material}`,
            [
                { text: 'OK', onPress: () => resetForm() }
            ]
        );
    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                    <Image source={require('../../assets/add-product.png')} style={styles.image}/>
                    <Text style={styles.description}>
                        Please fill out the form below to add a new product.
                    </Text>
                    </View>
                    <Textinput productFormSchema={productFormSchema} addProduct={addProduct} productNameRef={productNameRef} productPriceRef={productPriceRef} productMaterialRef={productMaterialRef} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Product