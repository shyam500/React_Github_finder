import { useEffect, useState } from "react";
import Err from "./Err";
import classes from "./Home.module.css";
import Profile from "./Profile";
import Search from "./Search";
import UserList from "./UserList";
import logo from "E:/projects/github/files/logo.png";
import Loader from "./Loader";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserList(data);
      setErr(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErr(true);
    }
  }

  const searchUserFunction = (name) => {
    setLoading(false);
    setErr(false);
    setUser(name);
    setSearch(true);
  };

  const getUserName = (userName) => {
    setUser(userName);
  };

  useEffect(() => {
    getData("https://api.github.com/users");
  }, []);

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <div>
          <img src={logo} alt="logo" />
          <h1>Github Finder</h1>
        </div>
      </header>
      <Search searchName={searchUserFunction} />
      {loading && <Loader />}
      {err && !loading && <Err />}
      {!err && !loading && search && <Profile user={user} search={setSearch} />}
      {!err && !loading && (
        <UserList users={userList} getName={getUserName} search={setSearch} />
      )}

      <footer className={classes.footer}>
        <p>Github_finder &copy; 2022</p>
      </footer>
    </section>
  );
};

export default Home;