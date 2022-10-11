import { View, Text, SelectList, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useGetAllPublicationsQuery } from '../features/publicationsAPI'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function Blog() {
  const { data: publications } = useGetAllPublicationsQuery()

  const navigation = useNavigation()
  const [category, setCategory] = useState('')
  const categories = [{ key: '', value: "All categories" }, { key: 'Health', value: 'Health' }, { key: 'Social Impact', value: 'Social Impact' }, { key: 'Pets', value: 'Pets' }]
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
      decelerationRate={0}>
        <View>
      <Text
        style={{
          color: '#74B49B',
          fontSize: 25,
          textAlign: 'center',
          paddingVertical: 7
        }}>MindGrow Mission</Text>
      <Text
        style={{
          fontSize: 18,
          color: "black",
          padding: "5%",
          textAlign: "justify",
          backgroundColor: '#A7D7C5',
          margin: 10,
          borderRadius: 15
        }}>MindGrow is centered around our core values of diversity, equity and inclusion. Its purpose is to bring awareness to the power of medical cannabis through education and community enrichment. By continuing to educate about the benefits of Cannabinoids on health applications, we can begin to break the stigmas attached to cannabis, provide a greater understanding on the benefits of this incredible plant, and help deliver a positive impact within the communities in which we operate. Our purpose is to invest in the medical industry to uncover more benefits and help people improving their quality of life through the usage of this kind of products.</Text>
        </View>
        <View
              style={{
                flex: 1,
                width: width,
                height: height,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#fff'
              }}
              decelerationRate={0}>
        <SelectList
                    data={categories}
                    setSelected={setCategory}
                    placeholder='Select category'
                    boxStyles={{ width: "60%", alignSelf: 'center', marginVertical: 10 }}
                    defaultOption={{ key: '', value: "Categories" }}
                    dropdownStyles={{ width: "60%", height: 'auto', alignSelf: 'center' }}
                    search={false} /* onSelect={() => alert(category)} */
                />

        <FlatList
                data={publications}
                renderItem={({ item }) =>
                    <PublicationCard
                        key={item._id}
                        name={item.name}
                        photo={item.photo}
                        category={item.category}
                        id={item._id}
                        navigation={navigation}
                    />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                decelerationRate={0}
            />
        </View>
    </View>
  )
}