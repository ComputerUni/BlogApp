import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export default function BlogPostForm({ onSubmit, initialValues, isEditable }) {
  // Create ekranında initialValues değerimiz olmadığı için ilk başta bir kontrol yapıyoruz eğer varsa edit işaretine bastığımızda o değer gelir yoksa create ekranı boş olarak açılır.
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ""
  );
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.label}>Başlık</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.label}>İçerik</Text>
          <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonMain}
        onPress={() => onSubmit(title, content)}
      >
        <View style={styles.buttonView}>
          {isEditable ? (
            <Text style={styles.buttonText}>Güncelle</Text>
          ) : (
            <Text style={styles.buttonText}>Kaydet</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#9d62bc",
    marginLeft: 10,
    marginTop: 4,
  },

  container: {
    flexDirection: "column",
    gap: 10,
  },

  titleContainer: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#833baa",
    borderRadius: 22,
  },

  contentContainer: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#833baa",
    borderRadius: 22,
  },
  input: {
    marginLeft: 8,
    color: "#b789cd",
  },

  buttonMain: {
    padding: 30,
  },
  buttonView: {
    backgroundColor: "#b789cd",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
