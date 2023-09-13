import React from "react";
import InputEditor from "./InputEditor";

function FormEditor({ schema, setSchema }) {
    return (
        <>
            <h3>This is a form editor component</h3>

            {schema.map((obj, index) => {
                return (
                    <div key={index}>
						<InputEditor inputField={obj} setSchema={setSchema} />
						<hr />
                    </div>
                );
            })}

            <button>+ Add</button>
        </>
    );
}

export default FormEditor;
