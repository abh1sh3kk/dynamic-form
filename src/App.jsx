import { useState } from "react";
import "./App.css";
import FormField from "./FormField";

function App() {
    const [formData, setFormData] = useState({
        fname: "Magnus",
        lname: "Carlsen",
        age: 32,
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
            placeholder: "First Name",
            label: "Enter your first name",
            name: "fname",
        },
        {
            type: "text",
            placeholder: "Last Name",
            label: "Enter your last name",
            name: "lname",
        },
        {
            type: "number",
            placeholder: "Age",
            label: "Enter your age",
            name: "age",
        },
    ];

    return (
        <>
            <h2>
                {formData.fname} {formData.lname}
            </h2>
            <h3>Age: {formData.age}</h3>

            <hr />

            <form>

                {schema.map((obj, index) => {

                    return (
                        <section key={index}>
                            <label>
                                <span>{obj.label}</span>
                                <input
                                    type={obj.type}
                                    placeholder={obj.placeholder}
                                    value={formData[obj.name]}
                                    onChange={handleChange}
                                    name={obj.name}
                                />
                            </label>
                            <br />
                        </section>
                    );

                })}

            </form>
            <hr />
        </>
    );
}

export default App;
