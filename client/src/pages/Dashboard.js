import MainDash from "../components/layout/MainDash";
import classes from './Dashboard.module.css';

export default function Dashboard() {
    return (
        <div className={classes.Dashboard}>
            <div className={classes.DashGlass}>
                <MainDash />
            </div>
        </div>
    );
}