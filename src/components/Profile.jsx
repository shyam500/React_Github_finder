import { useEffect, useState } from "react";
import classes from "./Profile.module.css";

const Profile = ({ user }) => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState(user);

  const getUser = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getUser(`https://api.github.com/users/${username}`);
  }, [username]);

  console.log(data.location);

  return (
    <section className={classes.User_container}>
      <section className={classes.one}>
        <img src={data.avatar_url} alt="profile" />
        <div className={classes.data}>
          <h1>{data.name}</h1>
          <h2>User name : {data.login}</h2>
          <p>Account type : {data.type}</p>
          <p>Location : {data.location}</p>
          <p>Company : {data.company}</p>
          <p>Twitter : {data.twitter_username}</p>
          <a href={data.url}>see in Github</a>
        </div>
      </section>
      <section className={classes.two}>
        <p>public_repos : {data.public_repos}</p>
        <p>public_gists : {data.public_gists}</p>
        <p>followers {data.followers}</p>
        <p>following {data.following}</p>
      </section>
      <h2>Single Profile</h2>
    </section>
  );
};

export default Profile;
