import React, { useRef } from "react";

function Input({ schema, formData, setFormData }) {
    const ref = useRef();
    const handleChange = (event, schema, formData, setFormData) => {
        const validateInput = (event, schema) => {
            const inputValue = event.target.value;
            const inputType = event.target.type;

            if (inputType === "text") {
                if (inputValue.length > schema.validation.maxlen.value) {
                    ref.current.textContent = schema.validation.maxlen.message;
                    return false;
                }
            }

            if (inputType === "number") {
                const { maxval, minval } = schema.validation;

                if (inputValue < minval.value) {
                    ref.current.textContent = minval.message;
                    return false;
                } else if (inputValue > maxval.value) {
                    ref.current.textContent = maxval.message;
                    return false;
                }
            }

            ref.current.textContent = "";
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
        <>
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
            <span className="error-msg" ref={ref}></span>
        </>
    );
}

export default Input;
