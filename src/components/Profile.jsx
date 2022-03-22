import { useEffect, useState } from "react";
import Err from "./Err";
import classes from "./Profile.module.css";
import Loader from "./Loader";

const Profile = ({ user, search }) => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState(user);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const getUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setErr(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErr(true);
    }
  };

  useEffect(() => {
    getUser(`https://api.github.com/users/${username}`);
  }, [username]);

  if (loading) {
    return <Loader />;
  }

  if (err && !loading) {
    return <Err />;
  }

  if (!err && !loading) {
    return (
      <section className={classes.User_container}>
        <span className={classes.delBtn} onClick={() => search(false)}>
          X
        </span>
        <section className={classes.one}>
          <img src={data.avatar_url} alt="profile" />
          <div className={classes.data}>
            <h1>{data.name === null ? "Not Availiable" : data.name}</h1>
            <h2>User name : {data.login === null ? "Not Availiable" : data.login}</h2>
            <p>Account type : {data.type === null ? "Not Availiable" : data.type}</p>
            <p>Location : {data.location=== null ? "Not Availiable" : data.location}</p>
            <p>Company : {data.company=== null ? "Not Availiable" : data.company}</p>
            <p>Twitter : {data.twitter_username=== null ? "Not Availiable" : data.twitter_username}</p>
          </div>
        </section>
        <section className={classes.two}>
          <p>public_repos : {data.public_repos}</p>
          <p>public_gists : {data.public_gists}</p>
          <p>followers : {data.followers}</p>
          <p>following : {data.following}</p>
        </section>
      </section>
    );
  }
};

export default Profile;
