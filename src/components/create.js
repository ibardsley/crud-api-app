import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [website, setWebsite] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox)
    const postData = () => {
        axios.post(`https://63b99e2a3329392049f8f8a5.mockapi.io/password_keeper/Keeper`, {
            website,
            userName,
            password,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Website</label>
                    <input placeholder='Website' onChange={(e) => setWebsite(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>User Name</label>
                    <input placeholder='User Name' onChange={(e) => setUserName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to save my password' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}