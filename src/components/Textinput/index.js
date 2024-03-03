import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './style';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Formik } from 'formik';
import { Button } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';

const Textinput = (props) => {
    return (
        <View>
            <Formik
                initialValues={{ name: '', price: '', material: '' }}
                validationSchema={props?.productFormSchema}
                onSubmit={(values, { resetForm }) => {
                    props?.addProduct(values?.name, values?.price, values?.material, resetForm);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <TextInput
                            placeholder="Product Name"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            ref={props?.productNameRef}
                            onSubmitEditing={() => props?.productPriceRef.current.focus()}
                            style={styles.input}
                            autoFocus={false}
                            underlineColor="#0147AB"
                            activeUnderlineColor='#0147AB'
                            textColor='#707070'
                            mode='flat'
                            keyboardType="default"
                            left={<TextInput.Icon icon={() => <FontAwesome name="user" size={hp(2.5)} color={'#000'} />} />}
                        />
                        {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

                        <TextInput
                            placeholder="Price"
                            onChangeText={handleChange('price')}
                            onBlur={handleBlur('price')}
                            value={values.price}
                            ref={props?.productPriceRef}
                            onSubmitEditing={() => Keyboard.dismiss()}
                            style={styles.input}
                            autoFocus={false}
                            underlineColor="#0147AB"
                            activeUnderlineColor='#0147AB'
                            textColor='#707070'
                            mode='flat'
                            keyboardType="numeric"
                            left={<TextInput.Icon icon={() => <MaterialCommunityIcons name="currency-usd" size={hp(2.5)} color={'#000'} />} />}
                        />
                        {touched.price && errors.price && <Text style={styles.errorText}>{errors.price}</Text>}
                        <Picker
                            selectedValue={values.material}
                            style={styles.picker}
                            onValueChange={(itemValue) =>
                                handleChange('material')(itemValue)
                            }>
                            <Picker.Item label="Select Material" value="" />
                            <Picker.Item label="Metal" value="Metal" />
                            <Picker.Item label="Plastic" value="Plastic" />
                            <Picker.Item label="Bronze" value="Bronze" />
                            <Picker.Item label="Wooden" value="Wooden" />
                            <Picker.Item label="Frozen" value="Frozen" />
                            <Picker.Item label="Cotton" value="Cotton" />
                            <Picker.Item label="Rubber" value="Rubber" />
                            <Picker.Item label="Soft" value="Soft" />
                            <Picker.Item label="Concrete" value="Concrete" />
                            <Picker.Item label="Granite" value="Granite" />
                        </Picker>
                        {touched.material && errors.material && <Text style={styles.errorText}>{errors.material}</Text>}
                        <Button style={styles.button} textColor='#fff' mode='contained' buttonColor={'#fa6e20'}
                            disabled={values.name && values.price && values.material ? false : true}
                            contentStyle={{
                                paddingHorizontal: wp(15),
                                paddingVertical: wp(2)
                            }}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Add Product</Text>
                        </Button>
                    </>
                )}
            </Formik>
        </View>

    )
}

Textinput.propTypes = {
    productFormSchema: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired,
    productNameRef: PropTypes.object.isRequired,
    productPriceRef: PropTypes.object.isRequired,
};

export default Textinput