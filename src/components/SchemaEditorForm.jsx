import React, { useState } from "react";

function SchemaEditorForm({ type, inputField, setSchema }) {
    const [inputOption, setInputOption] = useState("");

    const commonProperties = (
        <>
            <label>
                Name:
                <input
                    type={type}
                    value={inputField.name}
                    onChange={(e) => {
                        setSchema((oldSchema) =>
                            oldSchema.map((obj) => {
                                if (inputField.name === obj.name)
                                    return { ...obj, name: [e.target.value] };
                                return obj;
                            })
                        );
                    }}
                />
            </label>

            <label>
                Label:
                <input
                    type="text"
                    value={inputField.label}
                    onChange={(e) => {
                        setSchema((oldSchema) =>
                            oldSchema.map((obj) => {
                                if (inputField.name === obj.name)
                                    return { ...obj, label: [e.target.value] };
                                return obj;
                            })
                        );
                    }}
                />
            </label>

            <label>
                Placeholder:
                <input
                    type="text"
                    value={inputField.placeholder}
                    onChange={(e) => {
                        setSchema((oldSchema) =>
                            oldSchema.map((obj) => {
                                if (inputField.name === obj.name)
                                    return { ...obj, placeholder: [e.target.value] };
                                return obj;
                            })
                        );
                    }}
                />
            </label>
        </>
    );
    if (type === "text") {
        return <>{commonProperties}</>;
    }

    if (type === "number") {
        return (
            <>
                {commonProperties}
                <label>
                    Max Value
                    <input type="number" placeholder="Maximum value" />
                    <input type="text" placeholder="Error message to display" />
                </label>

                <label>
                    Min Value
                    <input type="number" placeholder="Min value" />
                    <input type="text" placeholder="Error message to display" />
                </label>
            </>
        );
    }

    if (type === "select") {
        return (
            <>
                {commonProperties}
                <label>
                    Options List:
                    <input
                        type="text"
                        placeholder="Enter an option"
                        value={inputOption}
                        onChange={(e) => setInputOption(e.target.value)}
                    />
                    <button
                        onClick={(e) => {
                            setSchema((oldSchema) => {
                                let newSchema = oldSchema.map((schemaValue) => {
                                    if (schemaValue.name === inputField.name) {
                                        if (!schemaValue.list.includes(inputOption))
                                            return {
                                                ...schemaValue,
                                                list: [...schemaValue.list, inputOption],
                                            };
                                        else console.log("Options can't be duplicated.");
                                    }
                                    return { ...schemaValue };
                                });

                                return newSchema;
                            });
                        }}
                    >
                        Add
                    </button>
                </label>
                {inputField.list.map((listOption, index) => {
                    return (
                        <div key={index}>
                            <button
                                data-index={index}
                                onClick={(e) => {
                                    setSchema((oldSchema) => {
                                        let newSchema = oldSchema.map((schemaValue) => {
                                            if (schemaValue.name === inputField.name) {
                                                let newList = [...schemaValue.list];
                                                newList.splice(index, 1);
                                                return { ...schemaValue, list: newList };
                                            }
                                            return schemaValue;
                                        });

                                        return newSchema;
                                    });
                                }}
                            >
                                x
                            </button>{" "}
                            {listOption}
                        </div>
                    );
                })}
            </>
        );
    }
}

export default SchemaEditorForm;
