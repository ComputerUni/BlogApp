import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

//Data alışverişinde bu kısım çok önemlidir. O yüzden Context kullanıyoruz.(Global state)
//Her bileşene props göndermeden veri ulaştırmak
//Hooklar ile verie erişmek için = useContext()

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    // case "add_blogpost":
    //   return [
    //     ...state,
    //     //id'den dolayı hata vermesin yine elemanlara rastgele id ataması yapıyoruz.
    //     {
    //       id: Math.floor(Math.random() * 999999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

//Bu fonksiyonu dışarıya açmamız gerekiyor bu yüzden return ile dispatch'i döndürüyoruz
//post metodu kısmını eklediğimiz için dispatch metodunun bir önemi kalmadı reducer'dan add_blogpost'u silebiliriz.
const addBlogPost = (dispatch) => {
  //setBlogPosts([...blogPosts, { title: "Vue Js" }]);
  return async (title, content, callback) => {
    // dispatch({ type: "add_blogpost", payload: { title, content } });
    await jsonServer.post("/blogposts", { title, content });
    if (callback) {
      callback();
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

//const blogPosts = [{ title: "React Native" }, { title: "Javascript" }];

//createDataContext(reducer, actions, initialState)
//alt kısımda reducer = blogReducer, actions = {addBlogPost}, initialState=[](yani boş array)

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
