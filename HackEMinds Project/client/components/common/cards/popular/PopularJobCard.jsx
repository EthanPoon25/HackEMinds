import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from '../../../../utils'
import styles from "./popularjobcard.style";
import { useNavigation } from '@react-navigation/native';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => navigation.navigate("det", {id: item.job_id})}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo) ?
              item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;