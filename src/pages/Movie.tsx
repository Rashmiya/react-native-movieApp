import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Movie = ({navigation}: any) => {
  interface movieDetails {
    poster_path: String;
    title: String;
    adult?: boolean;
    popularity?: Number;
    overview?: String;
  }

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  useEffect(() => {
    console.log('movie details:', movie);
  }, [movie]);

  const loadMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
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
      .then(json => setMovie(json.results))
      .catch(err => console.error('error:' + err));
  };
  function collectData(item: movieDetails) {
    // collect each data as an object to send ShowDetails page
    const dataset = {
      poster_path: item.poster_path,
      title: item.title,
      adult: item.adult,
      popularity: item.popularity,
      overview: item.overview,
    };
    // console.log('collected Data:', dataset);
    navigation.navigate('ShowDetails', {data: dataset, title: 'Movies'});
  }
  return (
    <ScrollView>
      <View style={styles.mainContent}>
        {movie.map((item: movieDetails, _index) => (
          <TouchableOpacity
            onPress={() => {
              collectData(item);
            }}>
            <View style={styles.containerCard}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                }}
                style={styles.imageCard}
              />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Movie;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    paddingRight: 0,
  },
  containerCard: {
    width: '45%',
  },
  imageCard: {
    width: 150,
    height: 150,
  },
  mainContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
