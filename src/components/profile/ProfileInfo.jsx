import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../theme/color';

const ProfileInfo = () => {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient
        colors={['#C91389', '#F9373F', '#FECD00']}
        style={styles.cover}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/33.jpg'}}
          style={styles.avatar}
        />
      </LinearGradient>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>1,425</Text>
        <Text style={styles.statLabel}>Post</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>5,400</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>1,250</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cover: {
    width: 90,
    height: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 45,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  stats: {
    alignItems: 'center',
    gap: 5,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.BLACK,
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.BLACK,
  },
});
