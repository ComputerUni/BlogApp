import React, { useState, useReducer } from "react";

//Fabrika Fonksiyon
//Bu dosya aslında bir “Context oluşturma fabrikası” gibi çalışıyor.
//Yani:“Bana bir reducer, bir actions objesi ve ilk state’i ver; ben sana hazır bir Context ve Provider üreteyim.”

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    //initialState başlangıç değerini kasteder.
    const [state, dispatch] = useReducer(reducer, initialState);

    //Her çağrıldığında kendine özel bir Context oluşturur (BlogContext).

    //Bu, klasik React useReducer hook’u:
    //state → o Context’in tuttuğu global state
    //dispatch → reducer’a “eylem” gönderen fonksiyon
    //reducer → dışarıdan parametre olarak gelen fonksiyon (örneğin blogReducer)
    //initialState → başlangıç state’i (örneğin [])

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    //actions parametresi, şöyle bir obje:
    //addBlogPost: addBlogPost,
    //...

    //Her bir action fonksiyonu ilk parametre olarak dispatch alacak şekilde yazılıyor:
    //ÖRN:
    // const addBlogPost = (dispatch) => {
    //   return () => {
    //     dispatch({ type: "add_blogpost" });
    //   };
    // };

    //BlogContext.js'teki fonksiyon ile ilişkili
    //actions[key](dispatch) çağrılınca:
    //actions[key] → addBlogPost
    //actions[key](dispatch) → addBlogPost(dispatch)
    //Bu da içeride return ettiği fonksiyonu döndürür:

    return (
      <Context.Provider value={{ data: state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  //Context ve Provider değerlerini dışarıya açıyoruz.
  return { Context, Provider };
};
