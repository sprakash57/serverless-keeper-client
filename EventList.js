import React from 'react';
import {FlatList, Text} from 'react-native';

export default class EventList extends React.Component {
    render() {
        return (
            <FlatList
                data={[{name:'sunny'},{name:'indu'}]}
                renderItem={(item) => <Text>item.value</Text>}
            />
        )
    }
}