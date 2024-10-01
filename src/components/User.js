import { useState } from "react";   

const User = ({name}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>{name}</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: krishan9052@gmail.com</h4>
        </div>
    );
};

export default User;