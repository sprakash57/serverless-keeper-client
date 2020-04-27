import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Auth } from 'aws-amplify';
import "./Login.css";
import { useAppContext } from "../libs/context";
import LoaderButton from "../components/LoaderButton";
import { useFormFields } from "../libs/hooksLib";

export default function Login() {
    const { userHasAuthenticated } = useAppContext();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleChange] = useFormFields({ email: "", password: "" });

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        console.log(email, password);
        try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            history.push("/");
        } catch (error) {
            alert(error.message);
            setIsLoading(false);
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={handleChange}
                        type="password"
                    />
                </FormGroup>
                {isLoading
                    ? <LoaderButton />
                    : <Button block bsSize="large" disabled={!validateForm()} type="submit">Login</Button>}
            </form>
        </div>
    );
}