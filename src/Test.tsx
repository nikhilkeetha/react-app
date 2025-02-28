import React, { useState } from "react";

const Test: React.FC = () => {
    const [name, setName] = useState<string>("");

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hello, {name}!</p>
        </div>
    );
};

export default Test;
