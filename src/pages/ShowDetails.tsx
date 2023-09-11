import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

const ShowDetails = (props: any) => {
  useEffect(() => {
    console.log('props:', props.route.params.title);
  }, [props]);

  return (
    <View style={styles.mainArea}>
      <View>
        <Text style={styles.pageTitle}>{props.route.params.title}</Text>
      </View>
      <View>
        {/* img should be display here */}
        <Image
          style={styles.posterArea}
          source={{
            uri: `https://image.tmdb.org/t/p/original${props.route.params.data.poster_path}`,
          }}
        />
      </View>
      <View style={styles.showContent}>
        <Text style={[styles.text, styles.textBold, styles.textSize]}>
          {props.route.params.title === 'Movies'
            ? props.route.params.data.title
            : props.route.params.data.name}
        </Text>
        <View style={styles.dynamicArea}>
          <Text style={styles.text}>Adult</Text>
          <Text style={styles.text}>Popularity</Text>
        </View>
      </View>
      <View style={styles.overview}>
        <Text style={[styles.text, styles.textBold]}>Overview</Text>
        <Text numberOfLines={6} ellipsizeMode="tail" style={styles.text}>
          {props.route.params.data.overview}
        </Text>
      </View>
      <TouchableOpacity style={styles.btnArea}>
        <Text style={styles.btnText}>Discover</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowDetails;

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
  pageTitle: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
    marginLeft: 110,
    marginTop: 20,
  },
  posterArea: {
    width: 250,
    height: 130,
    borderRadius: 15,
    marginLeft: 30,
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
  showContent: {
    height: 70,
    // borderWidth: 1,
    // borderColor: 'green',
    // borderStyle: 'solid',
  },
  text: {
    marginLeft: 35,
    color: '#000000',
    marginRight: 50,
    paddingTop: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textSize: {
    fontSize: 18,
  },
  dynamicArea: {
    // borderWidth: 1,
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    flex: 1,
    flexDirection: 'row',
  },
  overview: {
    height: 170,
    width: '100%',
    marginTop: 15,
    // borderWidth: 1,
    // borderColor: 'yellow',
    // borderStyle: 'solid',
  },
  btnArea: {
    // borderWidth: 1,
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    width: 200,
    height: 35,
    borderRadius: 8,
    marginLeft: 55,
    textTransform: 'lowercase',
    backgroundColor: '#BB2D00',
  },
  btnText: {
    fontSize: 15,
    color: '#FFFFFF',
    padding: 8,
    marginLeft: 60,
  },
});
