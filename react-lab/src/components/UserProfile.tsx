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
        return <p className="text-gray-500 italic">No user selected.</p>;
    }

    return (
        <div className="bg-white p-6 rounded shadow-md space-y-4">
            <h2 className="text-xl font-bold">User Profile</h2>
            <p>
                <strong className="font-medium">ID:</strong> {user.id}
            </p>
            <p>
                <strong className="font-medium">Full Name:</strong>{" "}
                {user.fullname}
            </p>
            <p>
                <strong className="font-medium">Age:</strong> {user.age}
            </p>
            <p>
                <strong className="font-medium">Education:</strong>{" "}
                {user.education}
            </p>
            <p>
                <strong className="font-medium">Gender:</strong> {user.gender}
            </p>
            <p>
                <strong className="font-medium">Skills:</strong>{" "}
                {user.skills.join(", ")}
            </p>
            <p>
                <strong className="font-medium">Bio:</strong> {user.bio}
            </p>
        </div>
    );
};

export default UserProfile;
