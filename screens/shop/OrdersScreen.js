/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);

    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => (
            <Text>{itemData.item.totalAmount}</Text>
            )}
        />
    )
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: <Icon name="menu" size={24} color="#fff" onPress={() => navData.navigation.toggleDrawer()} />,
    }
};

export default OrdersScreen;
