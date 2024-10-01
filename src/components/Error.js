import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    console.log(err);

    return (
        <div>
            <h2>{err.status}:{err.statusText}</h2>
            <h3>You're trying to access wrong page!</h3>
        </div>
    );
};


export default Error;