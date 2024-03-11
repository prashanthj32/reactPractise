import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((result)=>{
            console.log(result);
            setPosts(result.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    return (
        <div>
            Posts

            <ul>
                {
                    posts.map((post, index)=>{
                        return (
                            <li key={post.id}>{post.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Posts
