import classes from './MainDash.module.css';
import Cards from "./Cards";
import BasicTable from "./Table";

export default function MainDash() {
    return (
        <div className={classes.MainDash}>
            <h1>Dashboard</h1>
            <Cards />
            <BasicTable />
        </div>
    );
}