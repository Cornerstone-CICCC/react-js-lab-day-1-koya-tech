import React from "react";

interface FormData {
    fullname: string;
    age: number;
    education: string;
    gender: string;
    skills: string[];
    bio: string;
}

interface UserFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    onSave: () => void;
    onClear: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
    formData,
    setFormData,
    onSave,
    onClear,
}) => {
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const input = e.target as HTMLInputElement;
            const skill = value;
            setFormData((prev) => ({
                ...prev,
                skills: input.checked
                    ? [...prev.skills, skill]
                    : prev.skills.filter((s) => s !== skill),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === "number" ? Number(value) : value,
            }));
        }
    };

    return (
        <form className="space-y-4 bg-white p-6 rounded shadow-md">
            <div className="flex flex-col">
                <label className="font-medium">Full Name:</label>
                <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="border rounded p-2"
                />
            </div>
            <div className="flex flex-col">
                <label className="font-medium">Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="border rounded p-2"
                />
            </div>
            <div className="flex flex-col">
                <label className="font-medium">Education:</label>
                <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="border rounded p-2"
                >
                    <option value="">Select</option>
                    <option value="Grade school">Grade school</option>
                    <option value="High school">High school</option>
                    <option value="College">College</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="font-medium">Gender:</label>
                <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleChange}
                            className="form-radio"
                        />
                        <span>Male</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === "Female"}
                            onChange={handleChange}
                            className="form-radio"
                        />
                        <span>Female</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="gender"
                            value="Other"
                            checked={formData.gender === "Other"}
                            onChange={handleChange}
                            className="form-radio"
                        />
                        <span>Other</span>
                    </label>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="font-medium">Skills:</label>
                <div className="flex flex-wrap gap-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="skills"
                            value="TypeScript"
                            checked={formData.skills.includes("TypeScript")}
                            onChange={handleChange}
                            className="form-checkbox"
                        />
                        <span>TypeScript</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="skills"
                            value="React"
                            checked={formData.skills.includes("React")}
                            onChange={handleChange}
                            className="form-checkbox"
                        />
                        <span>React</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="skills"
                            value="Node"
                            checked={formData.skills.includes("Node")}
                            onChange={handleChange}
                            className="form-checkbox"
                        />
                        <span>Node</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="skills"
                            value="NoSQL"
                            checked={formData.skills.includes("NoSQL")}
                            onChange={handleChange}
                            className="form-checkbox"
                        />
                        <span>NoSQL</span>
                    </label>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="font-medium">Bio:</label>
                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="border rounded p-2"
                />
            </div>
            <div className="flex space-x-4">
                <button
                    type="button"
                    onClick={onSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add/Save User
                </button>
                <button
                    type="button"
                    onClick={onClear}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Clear
                </button>
            </div>
        </form>
    );
};

export default UserForm;
