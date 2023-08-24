import { useState } from "react";
import "./App.css";

function App() {
    const [errorMsg, setErrorMsg] = useState("");

    const [formData, setFormData] = useState({
        fname: "Magnus",
        lname: "Carlsen",
        gender: "male",
        age: 32,
        phoneNumber: "+977-98xxxxxxxx",
    });

    const handleChange = (e, validation) => {
        const { maxlen, minlen, maxval, minval } = validation;

        // console.log(formData[e.target.name]);
        if (formData[e.target.name].length > maxlen) {
            console.log(`Max characters allowed: ${maxlen}`);
        }

        if (formData[e.target.name].length < minlen) {
            console.log(`Min characters allowed: ${minlen}`);
        }

        if (formData[e.target.name] < minval) {
            console.log(`Min. age allowed: ${minval}`);
        }

        if (formData[e.target.name] > maxval) {
            console.log(`Max age allowed: ${maxval}`);
        }

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
            validation: {
                maxlen: 15,
                minlen: 2,
            },
        },
        {
            type: "text",
            title: "Last Name",
            placeholder: "Last Name",
            label: "Enter your last name",
            name: "lname",
            validation: {
                maxlen: 10,
                minlen: 3,
            },
        },
        // {
        //     type: "radio",
        //     title: "Gender",
        //     placeholder: "",
        //     label: "Choose your gender",
        //     name: "gender",
        // },
        {
            type: "number",
            title: "Age",
            placeholder: "Age",
            label: "Enter your age",
            name: "age",
            validation: {
                maxval: 50,
                minval: 18,
            },
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
                                onChange={(e) => {
                                    handleChange(e, obj.validation);
                                }}
                                name={obj.name}
                            />
                        </label>
                    );
                })}
                <button type="submit">Submit</button>
            </form>
            <hr />
            <span>{errorMsg}</span>

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
