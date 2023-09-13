import React from "react";

function SchemaEditorForm({ type, inputField, setSchema }) {
    const repeatedJSX = (
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
        return <>{repeatedJSX}</>;
    }

    if (type === "number") {
        return (
            <>
                <label>
                    Placeholder:
                    <input type="text" />
                </label>
                <label>
                    Label:
                    <input type="text" />
                </label>

                <label>
                    Name:
                    <input type="text" />
                </label>

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
                <label>
                    Placeholder:
                    <input type="text" />
                </label>
                <label>
                    Label:
                    <input type="text" />
                </label>

                <label>
                    Name:
                    <input type="text" />
                </label>
                <label>
                    List of inputs: <input type="text" />
                </label>
            </>
        );
    }
}

export default SchemaEditorForm;
