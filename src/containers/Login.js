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
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({ email: "", password: "" });

    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        try {
            await Auth.signIn(fields.email, fields.password);
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
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={fields.password}
                        onChange={handleFieldChange}
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