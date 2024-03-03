import { View, Text } from 'react-native'
import React from 'react'
import styles from '../ProductList/style';
import { Card } from 'react-native-paper';
import PropTypes from 'prop-types';

const DESCRIPTION_COLOR = '#000';

const ProductList = (props) => {
    return (
        <Card style={styles.card} mode='elevated'>
            <>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardName}>{props?.item?.name}</Text>
                    <Text style={{color:DESCRIPTION_COLOR}}>{props?.item?.description}</Text>
                    <View style={styles.line}>
                    <Text style={styles.cardPrice}>${props?.item?.price}</Text>
                    <Text style={styles.cardMaterial}>{props?.item?.material}</Text>
                    </View>
                </View>
            </>
        </Card>
    )
}

ProductList.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        material: PropTypes.string.isRequired,
    }).isRequired,
};
export default ProductList