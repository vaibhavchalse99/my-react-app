import { BrowserRouter, Link, Route, Switch, } from "react-router-dom"
import HomePage from "../../components/HomePage/HomePage";
import LoginPage from "../../components/LoginPage/LoginPage";


const AppRouter = () => {
    return (
        <>
            <Link to="/login">Login</Link>
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </>
    )
}

export default AppRouter;