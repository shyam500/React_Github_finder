import { Fragment } from "react";
import classes from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <Fragment>
      <h2>Top users</h2>
      <section className={classes.User_container}>
        {users.map((item, index) => {
          if (index > 8) {
            return;
          }
          return (
            <span className={classes.each_profile} key={item.id}>
              <img src={item.avatar_url} alt="Profile Picture" />
              <div>
                <h2>{item.login}</h2>
                <p>{item.type}</p>
              </div>
            </span>
          );
        })}
      </section>
    </Fragment>
  );
};

export default UserList;
