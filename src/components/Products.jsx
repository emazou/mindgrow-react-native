import { View, Text, TextInput, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useGetAllProductsQuery } from '../features/productsAPI'
/* import SelectList from 'react-native-dropdown-select-list' */
import NotFound from './NotFound'
import ProductCard from './ProductCard'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Products() {
    const navigation = useNavigation()
    const [sort, setSort] = useState('')
    const [product, setProduct] = useState('')
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const { data, isLoading } = useGetAllProductsQuery({ sort: sort, category: category, product: product, subcategory: subcategory })
    const subcategories = data?.response.subcategories
    let products = data?.response.products
    const categories = [{key:'1', value:'Cannabis'}, {key:'2', value:'Topicals'}, {key: '3', value: 'Vaping'}, {key: '4', value:'Pets'}, {key:'5', value: 'Edibles'}]
    return (
        <ScrollView
            style={{
                flex: 1,
                width: width,
                height: height,
                backgroundColor: '#fff'
            }}
            contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",

            }}
            decelerationRate={0}
        >
            <View
                styles={{
                    flex: 1,
                    justifyContent: "center",
                    backgroundColor: '#A7D7C5',
                    padding: 7,
                    width: "100%",
                }}>

                <TextInput
                    style={{
                        alignSelf: "center",
                        width: width * .9,
                        height: height * .05,
                        backgroundColor: "#f5f5f5",
                        marginTop: 10,
                        borderRadius: 15,
                        paddingStart: 25, 
                        position: 'fixed'
                    }}
                    placeholder={'Search product...'}
                    value={product}
                    onChangeText={(product) => setProduct(product)}
                />
               {/*  <SelectList setSelected={setCategory} data={categories} onSelect={() => alert(selected)} /> */}
            </View>
            {
                products?.length === 0 ? <NotFound /> : null
            }

            {
                products?.map((item) =>
                    <ProductCard
                        key={item._id}
                        name={item.name}
                        photo={item.photo}
                        category={item.category}
                        price={item.price}
                        id={item._id}
                        navigation={navigation}
                    />)
            }
        </ScrollView>
    )
}