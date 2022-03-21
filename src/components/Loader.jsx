import classes from "./Loader.module.css";

const Loader = () => {
    return(
        <section className={classes.container}>
        <h1>Loading<span>.</span><span>.</span><span>.</span></h1>
        </section>
    )
};

export default Loader;