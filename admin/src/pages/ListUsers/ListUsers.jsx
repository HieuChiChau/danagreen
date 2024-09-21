import React, { useEffect, useState } from 'react';
import UserAPI from '../../api/user';
import './ListUsers.css'; // Style nếu cần

const UserList = () => {
    const [users, setUsers] = useState([]);

    // Fetch danh sách người dùng khi component được mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await UserAPI.getUsers();
                setUsers(userList);
            } catch (error) {
                console.error('Error fetching user list:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h2>Danh Sách Người Dùng</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Điểm</th>
                        <th>Ngày Tạo</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={index}>
                                <td data-label="Tên">{user.username}</td>
                                <td data-label="Email">{user.email}</td>
                                <td data-label="Điểm">{user.score}</td>
                                <td data-label="Ngày Tạo">{new Date(user.createdAt).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Không có người dùng nào</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default UserList;
