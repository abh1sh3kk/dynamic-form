import React from "react";

function FormField({ data, type, label, name, handleChange }) {
    return (
        <label>
            <span>{label}</span>
            <input
                type={type}
                placeholder={label}
                value={data.fname}
                onChange={handleChange}
                name={name}
            />
        </label>
    );
}

export default FormField;

                // <FormField
                //     data={formData}
                //     placeholder="Enter your first name"
                //     label="Enter your first name"
                //     type="text"
                //     handleChange={handleChange}
                //     name="fname"
                // />