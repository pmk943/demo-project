import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";

function CasCadeDropDown() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const [titleSelector, setTitleSelector] = useState(true);
  const [bodySelector, setBodySelector] = useState(true);



  useEffect(() => {
    const getPosts = async () => {
      const rescountry = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const rescon = await rescountry.json();
      setPosts(await rescon);
    };
    getPosts();
  }, []);

  const handleIdChange = (e) => {
    setBody([])
    const postId = e.target.value;
    const filteredPosts = posts.filter((post) => post.id === postId);
    setTitle(filteredPosts);
    setTitleSelector(false)
  };

  const handleTitleChange = (e) => {
    const titles = e.target.value;
    const filteredBody = title.filter((post) => post.title === titles ? post.body:"check the code" );
    setBody(filteredBody);
    setBodySelector(false)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-label">ID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={posts}
          label="Age"
          onChange={(e) => handleIdChange(e)}
          // style={{background:"red"}}
        >
          <MenuItem>--Select ID--</MenuItem>
          {posts.map((post) => (
            <MenuItem value={post.id}>{post.id}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-label">Title</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={title}
          label="Age"
          disabled={titleSelector}
          onChange={(e) => handleTitleChange(e)}
          sx={{background: titleSelector ? "#DBD6D6" : "white" }}
        >
          <MenuItem>--Select Title--</MenuItem>

          {title.map((post) => (
            <MenuItem value={post.title}>{post.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-label">Body</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={body}
          label="Age"
          disabled={bodySelector}
          // onChange={handleChange}
          sx={{background: bodySelector ? "#DBD6D6" : "white" }}
        >
          <MenuItem>--Select Body--</MenuItem>
          {
            body.map((post) => <MenuItem value={post.body}>{post.body.slice(1,15)}</MenuItem> )
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export default CasCadeDropDown;
