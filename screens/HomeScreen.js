import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { useContext, useEffect } from "react";
import { Context } from "../context/BlogContext";
import Feather from "@expo/vector-icons/Feather";

//navigation prop’u, React Navigation tarafından sana otomatik verilir.
//Sen de bu prop sayesinde sayfalar arası geçiş yaparsın.

export default function HomeScreen({ navigation }) {
  //BlogContext dosyasında value={data ve addBlogPost değerlerini verdiğimiz için destructing yapıp bu kısımda çağırıyoruz.}
  const { data, addBlogPost, deleteBlogPost, getBlogPosts } =
    useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener("focus", getBlogPosts);
    return listener;
  }, [navigation]);

  return (
    <View>
      {/* <Button title="Ekle" onPress={addBlogPost} /> */}
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          //Bu kısımda navigate yapınca hangi bloğa tıklandıysa onun özelliklerine giden ShowScreen alanına yönlendiriyor ve id ile de hangi bloğun bilgilerini çekeceğimizi algılıyoruz.
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={20} color="#6f10a2" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#b789cd",
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6f10a2",
  },
});
