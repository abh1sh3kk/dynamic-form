import React, { useRef } from "react";

function Input({ schema, formData, setFormData, errors, setErrors }) {
    const ref = useRef();

    const handleChange = (event, schema, formData, setFormData) => {
        const validateInput = (event, schema) => {
            const displayErrorMsg = (ref, message) => {
                ref.current.textContent = message;
            };

            const popErrorFromList = (errors, setErrors, keyToRemove) => {
                setErrors(() => {
                    const newErrors = errors;
                    delete newErrors[keyToRemove];
                    return newErrors;
                });
            };

            const insertErrorToList = (errors, setErrors, name, message) => {
                setErrors(() => ({
                    ...errors,
                    [name]: message,
                }));
            };

            const inputValue = event.target.value;
            const inputType = event.target.type;

            if (inputType === "text") {
                if (inputValue.length > schema.validation.maxlen.value) {
                    displayErrorMsg(ref, schema.validation.maxlen.message);
                    insertErrorToList(
                        errors,
                        setErrors,
                        event.target.name,
                        schema.validation.maxlen.message
                    );
                    return false;
                }

                if (inputValue.length < schema.validation.minlen.value) {
                    displayErrorMsg(ref, schema.validation.minlen.message);
                    insertErrorToList(
                        errors,
                        setErrors,
                        event.target.name,
                        schema.validation.minlen.message
                    );
                    return false;
                }
                popErrorFromList(errors, setErrors, event.target.name);
                displayErrorMsg(ref, "");
            }

            if (inputType === "number") {
                const { maxval, minval } = schema.validation;

                if (inputValue < minval.value) {
                    displayErrorMsg(ref, minval.message);
                    insertErrorToList(
                        errors,
                        setErrors,
                        event.target.name,
                        schema.validation.minval.message
                    );
                    return false;
                }

                if (inputValue > maxval.value) {
                    displayErrorMsg(ref, maxval.message);
                    insertErrorToList(
                        errors,
                        setErrors,
                        event.target.name,
                        schema.validation.maxval.message
                    );
                    return false;
                }

                popErrorFromList(errors, setErrors, event.target.name);
                displayErrorMsg(ref, "");
            }

            return true;
        };

        validateInput(event, schema);

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
