import classes from "./Err.module.css";

const Err = () => {
    return(
        <article className={classes.container}>
        <h1>Ooops!</h1>
        <p>An Error Occured</p>
        <p>Please check your Internet connection</p>
        </article>
    )
};
export default Err;
