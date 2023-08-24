import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        fname: "Magnus",
        lname: "Carlsen",
        age: 32,
        phoneNumber: "+977-98xxxxxxxx",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const schema = [
        {
            type: "text",
            title: "First Name",
            placeholder: "First Name",
            label: "Enter your first name",
            name: "fname",
        },
        {
            type: "text",
            title: "Last Name",
            placeholder: "Last Name",
            label: "Enter your last name",
            name: "lname",
        },
        {
            type: "number",
            title: "Age",
            placeholder: "Age",
            label: "Enter your age",
            name: "age",
        },
        {
            type: "text",
            title: "Phone Number",
            placeholder: "Phone Number",
            label: "Enter your phone number",
            name: "phoneNumber",
        },
    ];

    return (
        <>
            <hr />

            <form>
                {schema.map((obj, index) => {
                    return (
                        <label key={index}>
                            <span>{obj.label}</span>
                            <input
                                type={obj.type}
                                placeholder={obj.placeholder}
                                value={formData[obj.name]}
                                onChange={handleChange}
                                name={obj.name}
                            />
                        </label>
                    );
                })}
            </form>
            <hr />

            {schema.map((obj, index) => {
                return (
                    <p key={index}>
                        <span className="title">{obj.title}:</span> {formData[obj.name]}
                    </p>
                );
            })}
        </>
    );
}

export default App;
