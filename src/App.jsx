import { useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {
    const [errorMsg, setErrorMsg] = useState("");

    const [formData, setFormData] = useState({
        fname: "Magnus",
        lname: "Carlsen",
        gender: "male",
        age: 32,
        phoneNumber: "+977-98xxxxxxxx",
        country: "Nepal",
    });

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
        {
            type: "select",
            title: "Country",
            placeholder: "Choose your country",
            list: [
                "Afghanistan",
                "Bangladesh",
                "Bhutan",
                "India",
                "Iran",
                "Maldives",
                "Nepal",
                "Pakistan",
                "Sri Lanka",
            ],
            label: "Choose your country",
            name: "country",
        },
        // {
        //     type: "select",
        //     title: "Favorite",
        //     placeholder: "Choose your favorite fruit",
        //     list: ["Apple", "Mango", "Banana"],
        //     label: "Choose your favorite fruit",
        //     name: "fruits",
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
            validation: {
                maxlen: 20,
                minval: 5,
            },
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

                            <Input formData={formData} schema={obj} setFormData={setFormData} />

                            {/* <input
                                type={obj.type}
                                placeholder={obj.placeholder}
                                value={formData[obj.name]}
                                onChange={(e) => {
                                    handleChange(e, obj.validation);
                                }}
                                name={obj.name}
                            /> */}
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
