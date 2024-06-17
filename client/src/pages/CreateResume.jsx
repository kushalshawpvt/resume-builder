import React, { useState } from "react";

export default function CreateResume() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    projects: "",
    certificates: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="App p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto flex justify-between space-x-4">
        <div className="form-section w-1/2 p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Enter Information</h2>
          <form>
            <div className="form-group mb-4">
              <label className="block text-lg font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg font-medium">Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg font-medium">Education:</label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg font-medium">Experience:</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg font-medium">Projects:</label>
              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg font-medium">Certificates:</label>
              <textarea
                name="certificates"
                value={formData.certificates}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label className="block text-lg font-medium">
                Additional Information:
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
          </form>
        </div>
        <div className="preview-section w-1/2 p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
          <div className="resume">
            <h3 className="text-xl font-bold">{formData.name}</h3>
            <p className="text-gray-700">{formData.email}</p>
            <p className="text-gray-700">{formData.phone}</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Education</h4>
              <p className="text-gray-700">{formData.education}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Experience</h4>
              <p className="text-gray-700">{formData.experience}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Projects</h4>
              <p className="text-gray-700">{formData.projects}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Certificates</h4>
              <p className="text-gray-700">{formData.certificates}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Additional Information</h4>
              <p className="text-gray-700">{formData.additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
