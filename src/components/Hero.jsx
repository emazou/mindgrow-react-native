import { View, ImageBackground, Dimensions, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import UpperHero from './UpperHero'
import CarouselCategories from './CarouselCategories'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Hero = () => {
    const imgBack = { uri: 'https://i.im.ge/2022/10/10/2Mfq4C.doctorHome.jpg'}
    return (
        <ImageBackground
            source={imgBack}
            resizeMode="cover"
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: width,
                height: height,
            }}>
            <View style={{
                flexDirection: 'column',
                width: "40%",
                color: "black"
            }}>
                <UpperHero/>
            </View>

            <CarouselCategories />

            <StatusBar
                style='auto'
            />
        </ImageBackground>
    )
}

export default Hero