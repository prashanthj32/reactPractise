import React, { useState } from 'react'
import { Users } from '../../shared/UserData'
import AddAndUpdateUser from './AddAndUpdateUser'

function UserTable() {
    // const usersList = Users;
    const [usersList, setUsersList] = useState(Users);
    const [isUpdate, setIsUpdate] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const [showAddAndUpdateUser, setShowAddAndUpdateUser] = useState(false);
    const [selectedUserIndex, setSelectedUserIndex] = useState(-1);

    const closePopup = () => {
        console.log('close POp');
        setShowAddAndUpdateUser(false);
    }

    const handleSubmit = (newData) => {
        if (isUpdate) {
            let tempArray = usersList;
            tempArray[selectedUserIndex] = newData;
            setUsersList(tempArray);
        } else {
            setUsersList([...usersList, newData])
        }
        setShowAddAndUpdateUser(false);
    }

    return (
        <>
            {
                showAddAndUpdateUser &&
                <AddAndUpdateUser isUpdate={isUpdate} selectedUser={selectedUser} closePopup={closePopup} handleSubmit={handleSubmit} />
            }


            {showAddAndUpdateUser === false && <div>
                <div>UserTable</div>
                <div >
                    <button onClick={() => {
                        setShowAddAndUpdateUser(true);
                        setIsUpdate(false);
                        setSelectedUser({
                            name: '',
                            contact: '',
                            country: ''
                        });
                    }}>Add User</button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Country</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersList.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.contact}</td>
                                            <td>{user.country}</td>
                                            <td>
                                                <button onClick={() => {
                                                    setSelectedUser(user);
                                                    setIsUpdate(true);
                                                    setShowAddAndUpdateUser(true);
                                                    setSelectedUserIndex(index);
                                                }}>Update</button>
                                                
                                                <button onClick={() => {
                                                    if (window.confirm("Are sure to delete user") === true) {
                                                        let tempArray = usersList;
                                                        // tempArray.splice(index, 1);
                                                        console.log(tempArray.removeAt(index, 1), tempArray);
                                                        setUsersList(tempArray);
                                                    }
                                                }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>}
        </>
    )
}

export default UserTable