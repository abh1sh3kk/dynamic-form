import React from "react";

function Input({ schema, formData, setFormData, setFormValid }) {
    const handleChange = (event, schema, formData, setFormData) => {
        const validateInput = (event, schema) => {
            if (event.target.type === "number") {
                if (
                    event.target.value < schema.validation.minval ||
                    event.target.value > schema.validation.maxval
                ) {
                    console.log(
                        `The number must be between ${schema.validation.minval} and ${schema.validation.maxval}`
                    );
                    return false;
                }
            }
            if (event.target.type === "text") {
                if (event.target.value.length > schema.validation.maxlen) {
                    console.log(`No. of characters can't exceed ${schema.validation.maxlen}`);
                    return false;
                }
            }
            return true;
        };

        if (validateInput(event, schema))
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
    };

    if (schema.type === "select") {
        return (
            <select
                value={formData[schema.name]}
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                    });
                }}
                name={schema.name}
            >
                <option disabled>{schema.label}</option>
                {schema.list.map((country, index) => {
                    return (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    );
                })}
            </select>
        );
    }

    return (
        <input
            type={schema.type}
            placeholder={schema.placeholder}
            value={formData[schema.name]}
            name={schema.name}
            onChange={(e) => {
                handleChange(e, schema, formData, setFormData);
            }}
            autoComplete="off"
        />
    );
}

export default Input;
