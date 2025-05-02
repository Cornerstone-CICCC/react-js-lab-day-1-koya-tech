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
        <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">
                        Full Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            {user.id}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            {user.fullname}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <button
                                onClick={() => onView(user.id)}
                                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mx-1"
                            >
                                View
                            </button>
                            <button
                                onClick={() => onEdit(user.id)}
                                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mx-1"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(user.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mx-1"
                            >
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
