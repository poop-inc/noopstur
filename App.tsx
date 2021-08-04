import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const axios = require("axios");
  const opts: any = {};
  const { continuation, size = 10 } = opts;
  const fetchTokenInfo = async (items, opts) => {
  try {
    const result = await axios.get('https://api.rarible.com/protocol/v0.1/ethereum/nft/items/all', {
      params: { items, continuation }, 
    });
    const { data } = result;

    // Paginate results
    let hist = [];
    if (data.continuation && data.items.length === size) {
      hist = await fetchTokenInfo(items, { ...opts, continuation: data.continuation });
    }

    // Return full history
    return [...data.items, ...hist];
  } catch (err) {
    console.error(err);
    return [];
  }
};

  return (
    <View style={styles.container}>
      <Text>Noopster!{fetchTokenInfo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

