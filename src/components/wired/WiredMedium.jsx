import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "wired-elements";

const WiredMedium = () => {

  const mediumUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shanghaiiren'
  const [profile, setProfile] = useState({
    name: 'test',
    profileImage: '',
    profileUrl: ''
  })

  const [blog, setBlog] = useState({
    entries: [],
    isLoading: true,
    error: null
  })

  useEffect(() => {
    axios.get(mediumUrl)
      .then(info => {
        const image = info.data.feed.image;
        const link = info.data.feed.link;
        const blogs = info.data.items;
        const posts = blogs.filter(post => post.categories.length > 0)

        setProfile(p => ({ ...p, profileUrl: link, profileImage: image }))
        setBlog({ entries: posts, isLoading: false })
      })
      .catch(err => console.log(err))
  }, [axios])



  return (
    <wired-card>
      <h1>
        Blog
      </h1>
      {blog.entries.map((post, index) => {
        return (
          <div>
          <h5><a href={post.link} target='_blank'>{post.title}</a> </h5>
        </div>
        )
      })}
      {console.log(blog)}

    </wired-card>
  )
}

export default WiredMedium;
