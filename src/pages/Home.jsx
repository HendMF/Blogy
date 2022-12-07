import React, { useEffect, useState } from "react";
import styles from "./../styles/home.module.css";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className={styles.homePage}>
      {postLists.map((post) => {
        return (
          <div className={styles.post}>
            <div className={styles.postHeader}>
              <div className={styles.title}>
                <h1> {post.title}</h1>
              </div>
              <div className={styles.deletePost}>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div> 
            </div>
            <div className={styles.postTextContainer}> {post.postText} </div>
            
          </div>
        );
      })}
    </div>
  );
}

export default Home;
// <h3 className={styles.userName}>{`By: ${auth.currentUser.displayName}`}</h3>;