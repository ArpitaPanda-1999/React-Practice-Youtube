import React, {useState} from "react";

const FormValidation = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState({});
    const[submittedData, setSubmittedData] = useState(null);

    const validationForm = () => {
        let isValid = true;
        const newErr = {};

        if(!name.trim()){
            newErr.name = "Name must require";
            isValid = false;
        }

        if(!email.trim()){
            newErr.email = "Email must require";
            isValid = false;
        }

        if(!password.trim()){
            newErr.password = "password must require";
            isValid = false;
        }
        else if(password.length <= 6){
            newErr.password = "password more then 6 digit";
            isValid = false;
        }

        setError(newErr);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validationForm()){
            const submittedData = {name, email, password};
            setSubmittedData(submittedData);
            console.log("form submitted: ", submittedData)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {error.name && <span className="err">{error.name}</span>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <span className="err">{error.email}</span>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error.password && <span className="err">{error.password}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>Name : {submittedData.name}</p>
                    <p>Email : {submittedData.email}</p>
                    <p>Password : {submittedData.password}</p>
                </div>
            )}
        </>
    )
}

export default FormValidation;