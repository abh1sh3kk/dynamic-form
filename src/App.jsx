import { useState } from "react";

import "./App.css";
import Preview from "./components/Preview";
import Form from "./components/Form";
import FormEditor from "./components/FormEditor";

function App() {
    const [formData, setFormData] = useState({
        fname: "Magnus",
        lname: "Carlsen",
        gender: "male",
        age: 32,
        country: "Norway",
        address: "Tonsberg",
    });

    const [schema, setSchema] = useState([
        {
            type: "text",
            title: "First Name",
            placeholder: "First Name",
            label: "Enter your first name",
            name: "fname",
            validation: {
                maxlen: {
                    value: 15,
                    message: "First name can't be more than 15 characters.",
                },
                minlen: {
                    value: 2,
                    message: "First name must be of at least 2 characters.",
                },
            },
        },
        {
            type: "text",
            title: "Last Name",
            placeholder: "Last Name",
            label: "Enter your last name",
            name: "lname",
            validation: {
                maxlen: {
                    value: 10,
                    message: "Last name can't be more than 10 characters.",
                },
                minlen: {
                    value: 3,
                    message: "Last name must be of atleast 3 characters.",
                },
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
                maxval: {
                    value: 50,
                    message: "Age should be less than 50.",
                },
                minval: {
                    value: 18,
                    message: "Age should be more than 18.",
                },
            },
        },
        {
            type: "text",
            title: "Address",
            placeholder: "Address",
            label: "Enter your address",
            name: "address",
            validation: {
                maxlen: {
                    value: 30,
                    message: "Address can't be more than 30 charatcers.",
                },
                minlen: {
                    value: 5,
                    message: "Address must be of at least 5 characters.",
                },
            },
        },
    ]);

    const [errors, setErrors] = useState({});

    const handleChangeTemp = () => {
    }

    return (
        <>
            <hr />
                <Form schema={schema} formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} />
            <hr />

            {/* <Preview schema={schema} formData={formData} /> */}

            <FormEditor schema={schema} setSchema={setSchema} />
        </>
    );
}

export default App;
