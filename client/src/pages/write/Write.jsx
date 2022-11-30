import "./write.css";
import blogImg from "../../components/images/header.jpeg";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload/", data);
      } catch (error) {}
    }
    
    try {
        const res = await axios.post("http://localhost:5000/api/posts/", newPost);
        window.location.replace("http://localhost:5000/api/post/"+res.data._id)
    } catch (error) {
        
    }
    
  };

  return (
    <div className="write">
    {file && (<img className="blogImg" src={URL.createObjectURL(file)} alt="" />)}
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput" className="writeIcon">
            ➕
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])} />
          <input
            type="text"
            placeholder="Title"
            className="writeTitle"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write your blog..."
            className="writeTitle writeBlog"
            type="text"
            onChange={e=>setDesc(e.target.value)}
          />
        </div>
        <button className="submitBlog" type='submit'>
          Publish Blog
        </button>
      </form>
    </div>
  );
}
