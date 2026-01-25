import React from "react";
import BlogPostForm from "../components/BlogPostForm";
import { useContext } from "react";
import { Context } from "../context/BlogContext";

//navigation.pop() ile de bir önceki sayfaya gidilebiliyor ya da navigation.navigate('Home') ile de yapılabiliyor.

export default function EditScreen({ route, navigation }) {
  const { data, editBlogPost } = useContext(Context);
  const id = route.params.id;
  //console.log(route.params.id); //Bloğun id değerini verir.
  const blogPost = data.find((blogPost) => blogPost.id === route.params.id);
  return (
    <BlogPostForm
      isEditable={true}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
}
