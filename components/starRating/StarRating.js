import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const StarRating = ({ratings, views, imgWidth, imgHeight, textFont}) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        let path = require('../../assets/images/star-filled.png');
        if (i > ratings) {
            path = require('../../assets/images/star-unfilled.png');
        }
        stars.push((<Image key={i} style={{width: imgWidth,height: imgHeight}} source={path} />));
    }

    return (
        <View style={ styles.container }>
            { stars }
            <Text style={[styles.text, {fontSize:textFont}]}>{ratings} ({views})</Text>
        </View>
    );
}

export default StarRating

const styles = StyleSheet.create({
    container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		marginLeft: 5,
        color: "#636D77"
	}
})