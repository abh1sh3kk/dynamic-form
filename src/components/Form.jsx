import React from "react";
import Input from "./Input";

function Form({schema, formData, setFormData, errors, setErrors}) {

    return (
            <form>
                {schema.map((obj, index) => {
                    return (
                        <label key={index}>
                            <span>{obj.label}</span>
                            <Input
                                schema={obj}
                                formData={formData}
                                setFormData={setFormData}
                                errors={errors}
                                setErrors={setErrors}
                            />
                        </label>
                    );
                })}

                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        if (Object.values(errors).every((item) => item === null))
                            alert("Form is submitted successfully.");
                    }}
                    disabled={!Object.values(errors).every((item) => item === null)}
                >
                    Submit
                </button>
            </form>
    );
}

export default Form;
