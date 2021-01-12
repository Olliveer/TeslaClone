import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';


const CarItem = (props) => {

    const { name, subName, subNameCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {subName}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {subNameCTA}
                    </Text>

                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton type="primary"
                    content={"Custon Order"}
                    onPress={() => { console.warn('Custon order pressed') }}
                />

                <StyledButton type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => { console.warn('Existing inventory was pressed') }}
                />
            </View>
        </View>
    );
};

export default CarItem;

