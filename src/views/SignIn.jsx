import { useState, useEffect } from "react";
import "./Home.css";

export default function SignIn() {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        checkbox: false,
    });

    const [savedValues, setSavedValues] = useState(null);

   
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formValues", JSON.stringify(value));
        setSavedValues(value);
        setValue({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            checkbox: false,
        });
    };

    useEffect(() => {
        const storedValues = localStorage.getItem("formValues");
        if (storedValues) {
            setSavedValues(JSON.parse(storedValues));
        }
    }, []);

    const time = localStorage.getItem("selectedTime");

    return (
        <div className="w-100 d-flex align-items-center flex-column justify-content-center">
            <h3 className="h3Color mt-3">Add Your Personal Details</h3>
            <div className="row col-4 d-flex align-items-center justify-content-center mt-2">
                <form className="d-flex flex-column align-items-center w-100" onSubmit={handleSubmit}>
                    <label></label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="shadow p-3 mb-3 bg-light rounded"
                        value={value.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="shadow p-3 mb-3 bg-light rounded"
                        value={value.lastName}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="shadow p-3 mb-3 bg-light rounded"
                        value={value.email}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="shadow p-3 mb-2 bg-light rounded"
                        value={value.phoneNumber}
                        onChange={handleChange}
                    />
                    <div className="d-flex align-items-center flex-row shadow p-3 mb-2 bg-light rounded">
                        <input
                            type="checkbox"
                            name="checkbox"
                            style={{ fontSize: "10PX" }}
                            className="col-1"
                            checked={value.checkbox}
                            onChange={handleChange}
                        />
                        <label style={{ fontSize: "10px" }} className="mb-2 col-11">
                            By clicking the button above, you acknowledge, consent and agree to the following: a) Our Privacy
                            Policy and consent to receive notices and other communications electronically; b) We take your
                            privacy seriously. You are providing express written consent for us to share your information with
                            up to four (4) of its and for parties calling on behalf of, or authorized third-parties on their
                            behalf to contact you (including through automated means; e.g., autodialing, text and pre-recorded
                            messaging) about legal services or other Mass Tort related offers via telephone, mobile device
                            (including SMS and MMS) and/or email, even if your telephone number is currently listed on any
                            state, federal, local or corporate Do Not Call list; c) Consent to be contacted is not required in
                            order to purchase goods or services from or the that contact you. You may choose to speak with an
                            individual service provider by dialing (888) 888-8888.
                        </label>
                    </div>
                    <button className="m-4 p-3 btn-submit" type="submit">
                        SUBMIT YOUR DETAILS &gt;
                    </button>
                </form>
                {savedValues && (
                    <div className="mt-4 shadow p-3 mb-3 bg-light rounded">
                        <label className="">What you submitted!</label>
                        {savedValues.firstName && <p>First Name: {savedValues.firstName}</p>}
                        {savedValues.lastName && <p>Last Name: {savedValues.lastName}</p>}
                        {savedValues.email && <p>Email: {savedValues.email}</p>}
                        {savedValues.phoneNumber && <p>Phone Number: {savedValues.phoneNumber}</p>}
                        <p>Checkbox: {savedValues.checkbox ? "Checked" : "Unchecked"}</p>
                        {time && <p>Selected Time: {time}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}