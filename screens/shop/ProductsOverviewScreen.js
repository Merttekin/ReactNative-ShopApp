/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => {
                props.navigation.navigate('ProductDetail', {
                    productId: itemData.item.id,
                    productTitle: itemData.item.title,
                })
            }}
            onAddToCart={() => {
                dispatch(cartActions.addTocart(itemData.item));
            }}
          />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerRight: <Icon name="cart" size={24} color="#fff" onPress={() => {navData.navigation.navigate('Cart')}} />,
  }
}

export default ProductsOverviewScreen;
