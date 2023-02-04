import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { buildQueries } from '@testing-library/react';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63b99e2a3329392049f8f8a5.mockapi.io/password_keeper/Keeper`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, website, userName, password, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Website', website);
        localStorage.setItem('First Name', userName);
        localStorage.setItem('Last Name', password);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://63b99e2a3329392049f8f8a5.mockapi.io/password_keeper/Keeper`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63b99e2a3329392049f8f8a5.mockapi.io/password_keeper/Keeper/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleline color={'grey'} key={'grey'} inverted>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>User Name</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Password Saved</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.website}</Table.Cell>
                                <Table.Cell>{data.userName}</Table.Cell>
                                <Table.Cell>{data.password}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}