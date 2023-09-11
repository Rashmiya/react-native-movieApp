import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const ShowDetails = () => {
  interface ShowDetails {
    poster_path: String;
    name: String;
    adult: boolean;
    popularity: Number;
    overview: String;
  }
  const [showDetail, setShowDetail] = useState([]);

  useEffect(() => {
    loadAllDetails();
  }, []);

  const loadAllDetails = async () => {
    const url =
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setShowDetail(json.results))
      .catch(err => console.error('error:' + err));
  };
  return (
    <ScrollView>
      {showDetail.map((item: ShowDetails, _index) => (
        <View style={styles.mainArea}>
          <View>
            <Text style={styles.pageTitle}>TV Shows</Text>
          </View>
          <View>
            {/* img should be display here */}
            <Image
              style={styles.posterArea}
              source={{
                uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
              }}
            />
          </View>
          <View style={styles.showContent}>
            <Text style={[styles.text, styles.textBold, styles.textSize]}>
              {item.name}
            </Text>
            <View style={styles.dynamicArea}>
              <Text style={styles.text}>Adult</Text>
              <Text style={styles.text}>Popularity</Text>
            </View>
          </View>
          <View style={styles.overview}>
            <Text style={[styles.text, styles.textBold]}>Overview</Text>
            <Text numberOfLines={6} ellipsizeMode="tail" style={styles.text}>
              {item.overview}
            </Text>
          </View>
          <TouchableOpacity style={styles.btnArea}>
            <Text style={styles.btnText}>Discover</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
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
