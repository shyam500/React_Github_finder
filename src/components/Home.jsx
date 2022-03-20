import { useEffect, useState } from "react";
import Err from "./Err";
import classes from "./Home.module.css";
import Profile from "./Profile";
import Search from "./Search";
import UserList from "./UserList";
import logo from "E:/projects/github/files/logo.png";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState("");
  const [err, setErr] = useState(false);

  async function getData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserList(data);
      setErr(false);
    } catch (err) {
      setErr(true);
    }
  }

  const getUserName = (userName) => {
    setUser(userName);
  };

  useEffect(() => {
    getData("https://api.github.com/users");
  }, []);

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <h1>Github Finder</h1>
        <img src={logo} alt="logo" />
      </header>
      <Search />
      {err && <Err />}
      {!err && search && <Profile user={user} search={setSearch} />}
      {!err && (
        <UserList users={userList} getName={getUserName} search={setSearch} />
      )}

      <footer>
        <p>Github_finder &copy; 2022</p>
      </footer>
    </section>
  );
};

export default Home;
