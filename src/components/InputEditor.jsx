import React, { useState } from "react";
import SchemaEditorForm from "./SchemaEditorForm";

function InputEditor({ inputField, setSchema }) {

    const [selectedInput, setSelectedInput] = useState("text");

    return (
        <>
            <form>
                <label>
                    Type:
                    <select
                        name="selectInputType"
                        value={selectedInput}
                        onChange={(e) => setSelectedInput(e.target.value)}
                    >
                        <option value="text">Text</option>
                        <option value="select">Select</option>
                        <option value="number">Number</option>
                    </select>
                </label>

                <SchemaEditorForm
                    type={selectedInput}
                    inputField={inputField}
                    setSchema={setSchema}
                />

                <button
                    type="button"
                    onClick={() => {
                        console.log("removed");
                    }}
                >
                    Remove
                </button>
            </form>
        </>
    );
}

export default InputEditor;
