import React, { useState, ChangeEvent, FormEvent } from 'react';

interface EmergencyContact {
  name: string;
  relationship: string;
  contactNumber: string;
}

interface PersonalDetails {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  email: string;
  address: string;
  profilePicture: File | null;
  emergencyContact: EmergencyContact;
  nationality: string;
  dateOfBirth: string;
  medicalHistory: string;
}

interface Duration {
  from: string;
  to: string;
}

interface PreviousSchool {
  schoolName: string;
  class: string;
  duration: Duration;
  schoolAddress: string;
  percentage: string;
  tcUpload: File | null;
  subjectsStudied: string;
  achievements: string;
  extracurricularActivities: string;
  reasonForLeaving: string;
  certificates: File[];
}

interface EducationDetails {
  previousSchool: PreviousSchool;
}

interface ParentDetails {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  occupation: string;
  nationality: string;
  emergencyContactNumber: string;
  address: string;
  otherGuardians: EmergencyContact[];
  educationDetails: {
    highestQualification: string;
    additionalInfo: string;
  };
}

interface FormData {
  personalDetails: PersonalDetails;
  educationDetails: EducationDetails;
  parentDetails: ParentDetails;
}

const UserRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    personalDetails: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      email: '',
      address: '',
      profilePicture: null,
      emergencyContact: {
        name: '',
        relationship: '',
        contactNumber: '',
      },
      nationality: '',
      dateOfBirth: '',
      medicalHistory: '',
    },
    educationDetails: {
      previousSchool: {
        schoolName: '',
        class: '',
        duration: {
          from: '',
          to: '',
        },
        schoolAddress: '',
        percentage: '',
        tcUpload: null,
        subjectsStudied: '',
        achievements: '',
        extracurricularActivities: '',
        reasonForLeaving: '',
        certificates: [],
      },
    },
    parentDetails: {
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      occupation: '',
      nationality: '',
      emergencyContactNumber: '',
      address: '',
      otherGuardians: [{ name: '', relationship: '', contactNumber: '' }],
      educationDetails: {
        highestQualification: '',
        additionalInfo: '',
      },
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, dataset } = e.target;

    if (dataset.parent === 'personalDetails') {
      setFormData((prev) => ({
        ...prev,
        personalDetails: {
          ...prev.personalDetails,
          [name]: value,
        },
      }));
    } else if (dataset.parent === 'educationDetails') {
      setFormData((prev) => ({
        ...prev,
        educationDetails: {
          previousSchool: {
            ...prev.educationDetails.previousSchool,
            [name]: value,
          },
        },
      }));
    } else if (dataset.parent === 'parentDetails') {
      setFormData((prev) => ({
        ...prev,
        parentDetails: {
          ...prev.parentDetails,
          [name]: value,
        },
      }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, parent: keyof FormData, field: string) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: file,
      },
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can send formData to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">User Registration Form</h2>

      {/* Personal Details */}
      <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.personalDetails.firstName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="personalDetails"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.personalDetails.lastName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="personalDetails"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.personalDetails.age}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="personalDetails"
        />
        <select
          name="gender"
          value={formData.personalDetails.gender}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="personalDetails"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.personalDetails.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="personalDetails"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.personalDetails.address}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="personalDetails"
        />
        <input
          type="file"
          name="profilePicture"
          onChange={(e) => handleFileChange(e, 'personalDetails', 'profilePicture')}
          className="border border-gray-300 rounded"
        />
        <input
          type="text"
          name="emergencyContactName"
          placeholder="Emergency Contact Name"
          value={formData.personalDetails.emergencyContact.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="personalDetails"
        />
        <input
          type="text"
          name="emergencyContactRelationship"
          placeholder="Relationship"
          value={formData.personalDetails.emergencyContact.relationship}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="personalDetails"
        />
        <input
          type="text"
          name="emergencyContactNumber"
          placeholder="Emergency Contact Number"
          value={formData.personalDetails.emergencyContact.contactNumber}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="personalDetails"
        />
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          value={formData.personalDetails.nationality}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="personalDetails"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.personalDetails.dateOfBirth}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="personalDetails"
        />
        <textarea
          name="medicalHistory"
          placeholder="Medical History"
          value={formData.personalDetails.medicalHistory}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="personalDetails"
        />
      </div>

      {/* Education Details */}
      <h3 className="text-xl font-semibold mb-4">Education Details</h3>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <input
          type="text"
          name="schoolName"
          placeholder="Previous School Name"
          value={formData.educationDetails.previousSchool.schoolName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="educationDetails"
        />
        <input
          type="text"
          name="class"
          placeholder="Class (e.g., 1 to 3)"
          value={formData.educationDetails.previousSchool.class}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="educationDetails"
        />
        <input
          type="text"
          name="durationFrom"
          placeholder="Duration From"
          value={formData.educationDetails.previousSchool.duration.from}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="educationDetails"
        />
        <input
          type="text"
          name="durationTo"
          placeholder="Duration To"
          value={formData.educationDetails.previousSchool.duration.to}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="educationDetails"
        />
        <input
          type="text"
          name="schoolAddress"
          placeholder="School Address"
          value={formData.educationDetails.previousSchool.schoolAddress}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="educationDetails"
        />
        <input
          type="text"
          name="percentage"
          placeholder="Percentage"
          value={formData.educationDetails.previousSchool.percentage}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="educationDetails"
        />
        <input
          type="file"
          name="tcUpload"
          onChange={(e) => handleFileChange(e, 'educationDetails', 'tcUpload')}
          className="border border-gray-300 rounded"
        />
        <input
          type="text"
          name="subjectsStudied"
          placeholder="Subjects Studied"
          value={formData.educationDetails.previousSchool.subjectsStudied}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="educationDetails"
        />
        <textarea
          name="achievements"
          placeholder="Achievements"
          value={formData.educationDetails.previousSchool.achievements}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="educationDetails"
        />
        <textarea
          name="extracurricularActivities"
          placeholder="Extracurricular Activities"
          value={formData.educationDetails.previousSchool.extracurricularActivities}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="educationDetails"
        />
        <textarea
          name="reasonForLeaving"
          placeholder="Reason for Leaving"
          value={formData.educationDetails.previousSchool.reasonForLeaving}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="educationDetails"
        />
        <input
          type="file"
          name="certificates"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            setFormData((prev) => ({
              ...prev,
              educationDetails: {
                ...prev.educationDetails,
                previousSchool: {
                  ...prev.educationDetails.previousSchool,
                  certificates: files,
                },
              },
            }));
          }}
          className="border border-gray-300 rounded"
        />
      </div>

      {/* Parent Details */}
      <h3 className="text-xl font-semibold mb-4">Parent Details</h3>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <input
          type="text"
          name="firstName"
          placeholder="Parent First Name"
          value={formData.parentDetails.firstName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Parent Last Name"
          value={formData.parentDetails.lastName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.parentDetails.contactNumber}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.parentDetails.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={formData.parentDetails.occupation}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          value={formData.parentDetails.nationality}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="emergencyContactNumber"
          placeholder="Emergency Contact Number"
          value={formData.parentDetails.emergencyContactNumber}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.parentDetails.address}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="otherGuardianName"
          placeholder="Other Guardian Name"
          value={formData.parentDetails.otherGuardians[0].name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="otherGuardianRelationship"
          placeholder="Relationship"
          value={formData.parentDetails.otherGuardians[0].relationship}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="otherGuardianContactNumber"
          placeholder="Contact Number"
          value={formData.parentDetails.otherGuardians[0].contactNumber}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          data-parent="parentDetails"
        />
        <input
          type="text"
          name="highestQualification"
          placeholder="Highest Qualification"
          value={formData.parentDetails.educationDetails.highestQualification}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
        <textarea
          name="additionalInfo"
          placeholder="Additional Info"
          value={formData.parentDetails.educationDetails.additionalInfo}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
          required
          data-parent="parentDetails"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  );
};

export default UserRegistrationForm;
