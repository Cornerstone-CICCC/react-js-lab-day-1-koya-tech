import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import "./App.css";

interface User {
    id: number;
    fullname: string;
    age: number;
    education: string;
    gender: string;
    skills: string[];
    bio: string;
}

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [formData, setFormData] = useState<Omit<User, "id">>({
        fullname: "",
        age: 0,
        education: "",
        gender: "",
        skills: [],
        bio: "",
    });
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleSave = () => {
        if (selectedUser) {
            setUsers((prev) =>
                prev.map((user) =>
                    user.id === selectedUser.id
                        ? { ...selectedUser, ...formData }
                        : user
                )
            );
        } else {
            const newUser: User = {
                id: users.length + 1,
                ...formData,
            };
            setUsers((prev) => [...prev, newUser]);
        }
        setFormData({
            fullname: "",
            age: 0,
            education: "",
            gender: "",
            skills: [],
            bio: "",
        });
        setSelectedUser(null);
    };

    const handleClear = () => {
        setFormData({
            fullname: "",
            age: 0,
            education: "",
            gender: "",
            skills: [],
            bio: "",
        });
        setSelectedUser(null);
    };

    const handleView = (id: number) => {
        const user = users.find((u) => u.id === id) || null;
        setSelectedUser(user);
    };

    const handleEdit = (id: number) => {
        const user = users.find((u) => u.id === id);
        if (user) {
            setFormData({
                fullname: user.fullname,
                age: user.age,
                education: user.education,
                gender: user.gender,
                skills: user.skills,
                bio: user.bio,
            });
            setSelectedUser(user);
        }
    };

    const handleDelete = (id: number) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
        if (selectedUser?.id === id) {
            setSelectedUser(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <UserForm
                formData={formData}
                setFormData={setFormData}
                onSave={handleSave}
                onClear={handleClear}
            />
            <UserList
                users={users}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <UserProfile user={selectedUser} />
        </div>
    );
};

export default App;
