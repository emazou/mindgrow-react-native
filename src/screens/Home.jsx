import { ScrollView } from 'react-native'
import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
    return (

        <ScrollView>
            <Hero /*navigation={navigation}*/ />
        </ScrollView>
    )
}

export default Home