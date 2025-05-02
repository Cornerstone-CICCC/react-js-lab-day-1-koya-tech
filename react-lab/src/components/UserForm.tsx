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
        <form>
            <div>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Education:</label>
                <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="Grade school">Grade school</option>
                    <option value="High school">High school</option>
                    <option value="College">College</option>
                </select>
            </div>
            <div>
                <label>Gender:</label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                    />
                    Female
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData.gender === "Other"}
                        onChange={handleChange}
                    />
                    Other
                </label>
            </div>
            <div>
                <label>Skills:</label>
                <label>
                    <input
                        type="checkbox"
                        name="skills"
                        value="TypeScript"
                        checked={formData.skills.includes("TypeScript")}
                        onChange={handleChange}
                    />
                    TypeScript
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="skills"
                        value="React"
                        checked={formData.skills.includes("React")}
                        onChange={handleChange}
                    />
                    React
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="skills"
                        value="Node"
                        checked={formData.skills.includes("Node")}
                        onChange={handleChange}
                    />
                    Node
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="skills"
                        value="NoSQL"
                        checked={formData.skills.includes("NoSQL")}
                        onChange={handleChange}
                    />
                    NoSQL
                </label>
            </div>
            <div>
                <label>Bio:</label>
                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="button" onClick={onSave}>
                    Add/Save User
                </button>
                <button type="button" onClick={onClear}>
                    Clear
                </button>
            </div>
        </form>
    );
};

export default UserForm;
