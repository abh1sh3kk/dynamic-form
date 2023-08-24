import React from "react";

function Input({ schema, formData, setFormData }) {
    const handleChange = (e, validation, setFormData, formData) => {
        const { maxlen, minlen, maxval, minval } = validation;

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
            onChange={(e) => {
                handleChange(e, schema.validation, setFormData, formData);
            }}
            autoComplete="off"
            name={schema.name}
        />
    );
}

export default Input;