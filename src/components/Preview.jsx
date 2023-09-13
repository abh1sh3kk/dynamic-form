import React from "react";

function Preview({schema, formData}) {
    return (
        <>
            {schema.map((obj, index) => {
                return (
                    <p key={index}>
                        <span className="title">{obj.title}:</span> {formData[obj.name]}
                    </p>
                );
            })}
        </>
    );
}

export default Preview;
