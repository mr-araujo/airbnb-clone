import React from 'react'
import { View, FlatList } from 'react-native'
import Post from '../../components/post'
import posts from '../../../assets/data/feed'

const ResultScreen = () => {
    return (
        <View>
            <FlatList 
                data={posts}
                renderItem={({item}) => <Post post={item} />}
            />
        </View>
    )
}

export default ResultScreen
