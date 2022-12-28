import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const StarRating = ({ratings, views}) => {

    let stars = [];

    for (let i = 1; i <= 5; i++) {
        let path = require('../../assets/images/star-filled.png');
        if (i > ratings) {
            path = require('../../assets/images/star-unfilled.png');
        }
        stars.push((<Image key={i} style={styles.image} source={path} />));
    }

    return (
        <View style={ styles.container }>
            { stars }
            <Text style={styles.text}>ratings ({views})</Text>
        </View>
    );
}

export default StarRating

const styles = StyleSheet.create({
    container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 10,
		height: 10
	},
	text: {
		fontSize: 10,
		marginLeft: 5,
        color: "#636D77"
	}
})