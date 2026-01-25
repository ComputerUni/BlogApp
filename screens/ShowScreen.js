import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { Context } from "../context/BlogContext";

//bu kısımda kullanacağım özellikleri belirledik sadece state'i kullanacağız ve useContext ile beraber destructing yaptık.
//route ile de yolunu belirledik.

export default function ShowScreen({ route }) {
  const { data } = useContext(Context);
  console.log(route.params.id); //Bloğun id değerini verir.
  const blogPost = data.find((blogPost) => blogPost.id === route.params.id);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Başlık</Text>
        <Text style={styles.content}> {blogPost.title} </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>İçerik</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 30,
    alignItems: "center",
    width: "90%",
  },
  label: {
    fontSize: 30,
  },
  content: {
    fontSize: 18,
  },
});
