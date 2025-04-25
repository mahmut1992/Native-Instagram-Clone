import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Logo, Messenger, Heart, Plus} from '../../utils/icons';
import {Colors} from '../../theme/color';

const {RED, White} = Colors;

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo />

      <View style={styles.actions}>
        <TouchableOpacity>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>

          <Heart size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>

          <Messenger size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Plus size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 45,
    alignItems: 'center',
    paddingBottom: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  dotContainer: {
    position: 'absolute',
    top: -1,
    right: -4,
  },
  dot: {
    backgroundColor: RED,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
});
