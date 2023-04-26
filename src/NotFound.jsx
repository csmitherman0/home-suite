import { useRouteError } from "react-router-dom";

import NavBar from "./components/layout/navigation/NavBar";

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <NavBar />
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}