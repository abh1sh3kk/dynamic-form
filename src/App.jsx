import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        fname: "Magnus",
        lname: "Carlsen",
        age: 33,
    });

    const handleChange = (e) => {
      console.log(e.target.name)
      console.log(e.target.name.value)
      set
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.name.value,
        // });
    };

    return (
        <>
        <h2>hi</h2>
            <h2>
                {formData.fname} {formData.lname}
            </h2>
            <hr />
            <form>
                <label>
                    <span>Enter your first name</span>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        value={formData.fname}
                        onChange={handleChange}
                        name="fname"
                    />
                </label>
                <br />
                <label>
                    <span>Enter your last name</span>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lname}
                        onChange={handleChange}
                        name="lname"
                    />
                </label>
                <br />
                <label>
                    <span>Enter your age</span>
                    <input
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        name="age"
                    />
                </label>
            </form>
            <hr />
        </>
    );
}

export default App;
