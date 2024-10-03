import React, {useState} from "react";

const FormHandleing = () => {
    const[form, setForm] = useState({
        username : "",
        email : "",
        password : "",
        isSubscibe : "",
        role : ""
    })

    const handleChange = (e) => {
        const{name, type, checked, value} = e.target;
        const fieldChange = (type === 'checkbox') ? checked : value ;

        setForm({...form, [name] : fieldChange});
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(form);
    }
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name="username" id="username" value={form.username} onChange={handleChange} />   
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />   
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" value={form.password} onChange={handleChange} />   
                </div>
                <div>
                    <label htmlFor="isSubscribe">Subscribe : </label>
                    <input type="checkbox" name="isSubscribe" id="isSubscribe" value={form.isSubscibe} onChange={handleChange} />   
                </div>
                <div>
                    <label htmlFor="role">Role : </label>
                    <select name="role" id="role" value={form.role} onChange={handleChange} >
                        <option value="">Choose your role</option>    
                        <option value="user">User</option>    
                        <option value="admin">Admin</option>    
                        <option value="IT">IT</option>    
                    </select>   
                </div>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default FormHandleing