import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ProfileStory = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Doğa</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/301'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Pati</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/302'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Mama</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/303'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Kediler</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/304'}}
            style={styles.storyImage}
          />
        </View>
        <Text>İnsan</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/305'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Oksijen</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/306'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Sevimli</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/307'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Ağaç</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/308'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Orman</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/309'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Sevgi</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/310'}}
            style={styles.storyImage}
          />
        </View>
        <Text>Hayat</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storys: {
    borderColor: '#DCDCDC',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  newStoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 20,
  },
});
