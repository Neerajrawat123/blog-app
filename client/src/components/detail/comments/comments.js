import { styled, Box, TextareaAutosize, Button } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import Comment from "./comment";
import { API } from "../../../services/api";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
});

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px !important;
  width: 100%;
  margin: 0 20px;
  padding: 10px 15px;
`;

const url = "https://static.thenounproject.com/png/12017-200.png";

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    text: ''
}
function Comments({post}) {
  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);
  const {account} = useContext(DataContext);
  const{id} = useParams()
  console.log(comments)

useEffect(() => {
    const getData = async () => {
        const response = await API.getAllComments(id);
        if (response?.isSuccess) {
            setComments(response?.data);
        }
    }
    getData();

}, [id, toggle])



  const handleChange = (e) => {
    setComment({
        ...comment,
        name: account.username,
        postId: post._id,
        text: e.target.value
    });
  };

  const addComment = async () => {
    await API.postComment(comment).then((res) => {
      console.log(res);
      setComment(initialValue)
      setToggle(prev => !prev)
    })
  };

  return (
    <Box>
      <Container>
        <Image src={url} alt="dp" />
        <StyledTextArea
          rowsMin={5}
          placeholder="what's on your mind?"
          onChange={(e) => handleChange(e)}
          value={comment.text}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          style={{ height: 40 }}
          onClick={(e) => addComment(e)}
        >
          Post
        </Button>
      </Container>
      <Box>
        {
          Array.isArray(comments) && comments.length > 0 && comments.map((comment, index) => (
            <Comment key={index} comment={comment} setToggle={setToggle} />
          ))
          
        }

      </Box>
    </Box>
  );
}

export default Comments;
