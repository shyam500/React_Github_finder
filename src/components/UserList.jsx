import { Fragment } from "react";
import classes from "./UserList.module.css";

const UserList = ({ users, getName, search }) => {

  const onclickHandler = (user) => {
    getName(user);
    search(true);
  }; 

  return (
    <Fragment>
      <h2 className={classes.heading}>Top users</h2>
      <section className={classes.User_container}>
        {users.map((item, index) => {
          if (index > 7) {
            return; 
          }
          return (
            <span className={classes.each_profile} key={item.id}>
              <img src={item.avatar_url} alt="Profile Picture" />
              <div>
                <h2 onClick={()=>onclickHandler(item.login)}>{item.login}</h2>
                <p>Account type : {item.type}</p>
              </div>
            </span>
          );
        })}
      </section>
    </Fragment>
  );
};

export default UserList;