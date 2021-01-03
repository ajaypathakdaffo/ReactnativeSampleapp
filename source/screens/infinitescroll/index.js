import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {spacingVertical, spacingHorizontal} from '../../constants/appstyle';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#00aaf0', borderRadius: 10, padding: 10}}>
        <Text>{item.title}</Text>
      </View>
      <View
        style={{backgroundColor: '#00FFFF33', borderRadius: 10, padding: 10}}>
        <Text>{item.body}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Mylist = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [Data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const LoadMore = () => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading .....</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          onEndReached={LoadMore}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: spacingHorizontal(20),
    marginVertical: spacingVertical(10),
    marginHorizontal: spacingHorizontal(5),
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  title: {
    fontSize: 32,
  },
});

export default Mylist;
