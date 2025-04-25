import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Story = ({story}) => {
  return (
    <View style={styles.story}>
      <LinearGradient
        style={styles.cover}
        colors={['#C91389', '#F9373F', '#FECD00']}>
        <Image source={{uri: story.user.avatar}} style={styles.avatar} />
      </LinearGradient>
      <Text numberOfLines={1} style={styles.userName}>
        {story.user.name}{' '}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 60,
    marginHorizontal: 8,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 1,
  },
  userName: {
    fontSize: 12,
    textAlign: 'center',
  },
});
