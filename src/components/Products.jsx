import { View, Text, ActivityIndicator, FlatList, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useGetAllProductsQuery } from '../features/productsAPI'
import SelectList from 'react-native-dropdown-select-list'
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
    const dataSubcategories = data?.response.subcategories
    let products = data?.response.products
    const categories = [{ key: '', value: "All categories" }, { key: 'Cannabis', value: 'Cannabis' }, { key: 'Topicals', value: 'Topicals' }, { key: 'Vaping', value: 'Vaping' }, { key: 'Pets', value: 'Pets' }, { key: 'Edibles', value: 'Edibles' }]
    const subcategories = dataSubcategories?.map((item) => ({ key: item, value: item }))
    const order = [{ key: '', value: 'Oder by' }, { key: '1', value: "Lowest price" }, { key: '-1', value: "Highest price" }]
    return (
        <View
            style={{
                flex: 1,
                width: width,
                height: height,
                justifyContent: "center",
                alignItems: "center",
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
                    flexDirection: "row",
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
                    }}
                    placeholder={'Search product...'}
                    value={product}
                    onChangeText={(product) => setProduct(product)}
                />
                <SelectList
                    data={categories}
                    setSelected={setCategory}
                    placeholder='Select category'
                    boxStyles={{ width: "60%", alignSelf: 'center', marginTop: 10 }}
                    defaultOption={{ key: '', value: "Categories" }}
                    dropdownStyles={{ width: "60%", height: 'auto', alignSelf: 'center' }}
                    search={false} /* onSelect={() => alert(category)} */
                />
                {
                    category != "" &&
                    <SelectList
                        data={[{ key: '', value: 'All subcategories' }, ...subcategories]}
                        setSelected={setSubcategory}
                        placeholder='Select subcategory'
                        boxStyles={{ width: "60%", alignSelf: 'center', marginTop: 10, }}
                        dropdownStyles={{ width: "60%", height: 'auto', alignSelf: 'center', }}
                        defaultOption={{ key: '', value: "Subcategories" }}
                        search={false}
                    />
                }
                <SelectList
                    data={order}
                    setSelected={setSort}
                    placeholder='Select category'
                    boxStyles={{ width: "60%", alignSelf: 'center', marginTop: 10 }}
                    defaultOption={{ key: '', value: "Order by" }}
                    dropdownStyles={{ width: "60%", alignSelf: 'center' }}
                    search={false} /* onSelect={() => alert(category)} */
                />

            </View>
            {
                products?.length === 0 ? <NotFound /> : null
            }
            <Text
                style={{
                    marginVertical: 10,
                    color: '#74B49B',
                    fontSize: 25,
                }}
            >
                {
                    category === "" ? "All categories" : category
                }
            </Text>

            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <ProductCard
                        key={item._id}
                        name={item.name}
                        photo={item.photo}
                        category={item.category}
                        price={item.price}
                        id={item._id}
                        stock={item.stock?item.stock: 1}
                        navigation={navigation}
                    />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                decelerationRate={0}
            />
            {
                isLoading &&
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator />
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '50%',
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});