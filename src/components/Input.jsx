import React from "react";

function Input({ schema, formData, setFormData, errors, setErrors }) {
    const findError = (event, schema, errors, setErrors) => {
        const inputValue = event.target.value;
        const inputType = event.target.type;
        const validation = schema.validation;

        if (inputType === "text") {
            if (inputValue.length > validation.maxlen.value) {
                return validation.maxlen.message;
            }

            if (inputValue.length < validation.minlen.value) {
                return validation.minlen.message;
            }
            return null;
        }

        if (inputType === "number") {
            const { maxval, minval } = validation;

            if (inputValue < minval.value) {
                return minval.message;
            }

            if (inputValue > maxval.value) {
                return maxval.message;
            }

            return null;
        }

        return null;
    };

    const handleChange = (event, schema, formData, setFormData) => {
        const errorInfo = findError(event, schema, errors, setErrors);

        setErrors(() => ({
            ...errors,
            [event.target.name]: errorInfo,
        }));

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
            <span className="error-msg">{errors[schema.name]}</span>
        </>
    );
}

export default Input;
