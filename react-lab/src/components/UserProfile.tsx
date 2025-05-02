import React from "react";

interface UserProfileProps {
    user: {
        id: number;
        fullname: string;
        age: number;
        education: string;
        gender: string;
        skills: string[];
        bio: string;
    } | null;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    if (!user) {
        return <p>No user selected.</p>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>
                <strong>ID:</strong> {user.id}
            </p>
            <p>
                <strong>Full Name:</strong> {user.fullname}
            </p>
            <p>
                <strong>Age:</strong> {user.age}
            </p>
            <p>
                <strong>Education:</strong> {user.education}
            </p>
            <p>
                <strong>Gender:</strong> {user.gender}
            </p>
            <p>
                <strong>Skills:</strong> {user.skills.join(", ")}
            </p>
            <p>
                <strong>Bio:</strong> {user.bio}
            </p>
        </div>
    );
};

export default UserProfile;
