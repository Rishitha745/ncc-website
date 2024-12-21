import React, { useState, useEffect } from "react";
import FormField from "./FormField";
import Title from "../../UI/Title";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    enrollmentNumber: "",
    mobileNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (isSubmitting) {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isSubmitting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (/[^a-zA-Z\s]/.test(formData.name)) {
      newErrors.name = "Name must contain only letters and spaces.";
    }

    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Father's Name is required.";
    } else if (/[^a-zA-Z\s]/.test(formData.fatherName)) {
      newErrors.fatherName =
        "Father's Name must contain only letters and spaces.";
    }

    if (!formData.dob.trim()) {
      newErrors.dob = "Date of birth is required.";
    } else if (new Date(formData.dob) > new Date()) {
      newErrors.dob = "Date of birth cannot be a future date.";
    }

    if (!formData.enrollmentNumber.trim()) {
      newErrors.enrollmentNumber = "Enrollment Number is required.";
    } else if (!/^TG[0-9]{2}SD[AW][0-9]{6}$/.test(formData.enrollmentNumber)) {
      newErrors.enrollmentNumber =
        "Enrollment Number must follow the format TG22SDA596979.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be a valid 10-digit number.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const batch = "20" + formData.enrollmentNumber.slice(2, 4);
    const formDataToSend = { ...formData, batch };

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxG88jNcOvoYukhuNZr0u-SEPy0oRxj1fYqJzdzeTTV2h9YhHMBIRr1aOooWymg5vkrPA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formDataToSend),
        }
      );

      const result = await response.text();
      console.log(result);

      if (result.includes("Success")) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          fatherName: "",
          dob: "",
          enrollmentNumber: "",
          mobileNumber: "",
          address: "",
        });
      } else if (result === "Error: Sheet not found.") {
        alert("Error submitting form. Registration is not open.");
      } else {
        alert(result || "Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Title>Enrollment Form</Title>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          // className="bg-slate-300 p-6 rounded-lg shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg"
          className="bg-slate-300 p-4 sm:p-6 rounded-lg shadow-md w-full sm:w-2/3 lg:w-1/2 max-w-2xl"
        >
          {/* <h1 className="text-2xl font-bold mb-4 text-center">Enrollment Form</h1> */}

          {/* Name Field */}
          <FormField
            label="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          {/* Father's Name Field */}
          <FormField
            label="Father's Name"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            error={errors.fatherName}
          />

          {/* Date of Birth Field */}
          <FormField
            label="Date of Birth"
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
          />

          {/* Enrollment Number Field */}
          <FormField
            label="Enrollment Number"
            id="enrollmentNumber"
            name="enrollmentNumber"
            value={formData.enrollmentNumber}
            onChange={handleChange}
            error={errors.enrollmentNumber}
          />

          {/* Mobile Number Field */}
          <FormField
            label="Mobile Number"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={errors.mobileNumber}
          />

          {/* Address Field */}
          <FormField
            label="Address"
            id="address"
            name="address"
            type="textarea"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full transition flex items-center justify-center rounded-lg px-5 py-3 outline-none text-sm text-slate-50 ${
              isSubmitting ? "bg-slate-600 cursor-not-allowed" : " bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? `Submitting${dots}` : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default EnrollmentForm;
