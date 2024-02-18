import { Add, Label } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputBase,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { API } from "../../services/api";
import { useParams } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  margin: "10px 20px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`;

const StyleTextArea = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  margin-top: 50px;
  font-size: 18px;
  &:focus-visible {
    outline: none;
  }
`;
const url = "";
const Update = () => {
  const [file, setFile] = useState("");
  const [post, setPost] = useState({});
  const { account } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await API.getPostById(id).then((response) => setPost(response?.data))
    }
  fetchData()
    
  }, [])


    const updateBlogPost = async () => {
        await API.updatePost(post).then((response)=> console.log(response))
    }
  
  
  const handleChange = (e) => {
    setPost({...post, [e?.target?.name]: e?.target?.value})

  };

  return (
    <Container>
      <Typography>hello</Typography>
      <Image src={post?.url || url} />
      <StyledFormControl>
        <Label htmlFor="file-input">
          <Add fontSize="large" color="action" />
        </Label>
        <Input
          type="file"
          name="file-input"
          style={{ display: "none" }}
          onChange={(e) => setFile(e?.target?.files)}
        />
        <InputTextField
          value={post?.title}
          name="title"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
        />
        <Button
          onClick={() => updateBlogPost()}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </StyledFormControl>

      <StyleTextArea
        minRows={5}
        placeholder="Enter the story"
        name="description"
        onChange={(e) => handleChange(e)}
        value={post?.description}
      />
    </Container>
  );
};

export default Update;
