import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [website, setWebsite] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setWebsite(localStorage.getItem('Website'));
        setUserName(localStorage.getItem('User Name'));
        setPassword(localStorage.getItem('Password'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://63b99e2a3329392049f8f8a5.mockapi.io/password_keeper/Keeper/${id}`, {
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
                    <input placeholder='Website' value={website} onChange={(e) => setWebsite(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>User Name</label>
                    <input placeholder='User Name' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to save my password' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}