import React from "react";

interface User {
    id: number;
    fullname: string;
}

interface UserListProps {
    users: User[];
    onView: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({
    users,
    onView,
    onEdit,
    onDelete,
}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.fullname}</td>
                        <td>
                            <button onClick={() => onView(user.id)}>
                                View
                            </button>
                            <button onClick={() => onEdit(user.id)}>
                                Edit
                            </button>
                            <button onClick={() => onDelete(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserList;
