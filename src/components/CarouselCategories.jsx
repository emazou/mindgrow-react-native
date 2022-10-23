import { View, Text, Image, StyleSheet, FlatList, Animated, Dimensions } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const containerCarousel = width * 0.7;
const asideSpace = (width - containerCarousel) / 2
const space = 10;


export default function Carousel() {
    const [scroll, setScroll] = useState()
    const scrollX = useRef(new Animated.Value(0)).current;

    const carouselCategories = [
        { name: 'Cannabis', photo: 'https://weedmaps.com/learn/wp-content/uploads/2020/05/181210_Nugs_017.jpg' },
        { name: 'Topicals', photo: 'https://fh1w93s8iw-flywheel.netdna-ssl.com/wp-content/uploads/2016/02/cannabistopical.jpg' },
        { name: 'Vaping', photo: 'https://static.wikileaf.com/uploads/2020/03/vaporizer-down-picture-id861451686.jpg' },
        { name: 'Edibles', photo: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327420/picture-of-cannabis-cookies.jpg' },
        { name: 'Pets', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBq2MM9P81IBn0Lg8qL_AHGHVx3TFj-T_43w&usqp=CAU' }
    ]
    useEffect(() => {
        Animated.timing(scrollX, {
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, [scroll]);

    return (
        <SafeAreaView style={styles.container}>
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                snapToAlignment="start"
                contentContainerStyle={{
                    paddingTop: 60,
                    marginHorizontal: asideSpace
                }}
                snapToInterval={containerCarousel}
                decelerationRate={0}
                scrollEventThrottle={16}
                data={carouselCategories}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => {
                    let photo = item.photo
                    let name = item.name
                    const inputRange = [
                        (index - 1) * containerCarousel,
                        index * containerCarousel,
                        (index + 1) * containerCarousel
                    ];
                    const outputRange = [0, -50, 0];
                    const scrollY = scrollX.interpolate({
                        inputRange,
                        outputRange
                    });
                    return (
                        <View style={{ width: containerCarousel }}>
                            <Animated.View
                                style={{
                                    marginHorizontal: space,
                                    padding: space,
                                    borderRadius: 34,
                                    backgroundColor: '#77628C',
                                    alignItems: 'center',
                                    transform: [{ translateY: scrollY }],
                                }}
                            >
                                <Text style={{
                                    color: 'aliceblue',
                                    fontWeight: 'bold',
                                    paddingBottom: 5,
                                    fontSize: 20
                                }}> {name} </Text>
                                <Image source={{ uri: photo }} style={styles.posterImage} />
                            </Animated.View>
                        </View>
                    )
                }}

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'

    },
    posterImage: {
        width: "100%",
        height: containerCarousel * 0.9,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,

    }
})