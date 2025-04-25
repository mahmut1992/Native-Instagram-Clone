import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../theme/color';

const ProfileBio = () => {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Username</Text>
      <Text style={styles.description}>
        🐼 | Michell✨ Macera dolu patilerimle dünyayı keşfediyorum! 🌐🐾📍
        Parklar, sokaklar, her yerdeyim! 📩 DM'den bana mama atabilirsin 😋
      </Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '700',
    color: Colors.BLACK,
  },
  description: {
    marginVertical: 5,
    color: Colors.BLACK,
  },
  link: {
    fontWeight: '400',
    color: Colors.BLUE,
  },
  editProfileButton: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#E5E3D4',
  },
  editProfileText: {
    fontWeight: '700',
    color: Colors.BLACK,
  },
});
