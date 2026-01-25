import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";
import HomeScreen from "./HomeScreen";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      isEditable={false}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate("Home");
        });
      }}
    />
  );
}

const styles = StyleSheet.create({});
