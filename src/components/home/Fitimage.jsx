import {Image, Dimensions} from 'react-native';

const Fitimage = ({src}) => {
  const width = Dimensions.get('window').width;

  const ratio = 1080 / width;

  const height = 607 / ratio;

  return <Image style={{width, height}} source={{uri: src}} />;
};

export default Fitimage;
