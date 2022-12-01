import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Setting() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const { user } = useContext(Context);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload/", data);
      } catch (error) {}
    }

    try {
       await axios.put("http://localhost:5000/api/users/"+user._id, updatedUser);
       setSuccess(true);
    } catch (error) {}
  };

  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="updateTitle">Update Your Account</span>
          <span className="deleteTitle">Delete Account</span>
        </div>
        <form className="settingForm" onSubmit={handleUpdate}>
          <label>Profile Picture</label>
          <div className="PP">
            <img src={file ? URL.createObjectURL(file) : user.profilePic} alt="" />
            <label htmlFor="fileInput">
              <i className="PPicon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)}/>
          <button className="updateBtn" type="submit">Update</button>
          {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
