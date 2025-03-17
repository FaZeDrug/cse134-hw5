import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("items")) || [];
        setData(savedData);
    }, []);

    const createData = () => {
        if (input.trim() === "") return alert("Enter valid data!");
        const newData = [...data, input];
        setData(newData);
        localStorage.setItem("items", JSON.stringify(newData));
        setInput("");
    };

    const updateData = (index) => {
        const newValue = prompt("Enter new value:");
        if (!newValue || newValue.trim() === "") return;
        const newData = [...data];
        newData[index] = newValue;
        setData(newData);
        localStorage.setItem("items", JSON.stringify(newData));
    };

    const deleteData = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
        localStorage.setItem("items", JSON.stringify(newData));
    };

    return (
        <div>
            <h1>CRUD Actions (React Version)</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter some data"
            />
            <button onClick={createData}>Create</button>

            <h2>Stored Data:</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => updateData(index)}>Update</button>
                        <button onClick={() => deleteData(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
