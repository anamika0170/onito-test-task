import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import axios from 'axios'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    sex: "",
    mobile: "",
    govtid: "",
    email:"",
    guardianD:"",
    emergency_mobile:"",
    occupation:"",
    religion:"",
    blood_group:"",
    nationality:"",
    address:"",
    city:"",
    // state:"",
    pincode:"",
    country:""
  });

  const [idType, setIdType] = useState("");

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
console.log("formData",formData)
  const handleSelectChange = (event) => {
    const { value } = event.target;
    setIdType(value);
  };

  const formFields = [
    {
      heading: "Personal Details",
      fields: [
        { id: "name", label: "Name", type: "text" },
        { id: "dob", label: "Date of Birth", type: "date" },
        { id: "age", label: "Age", type: "number" },
        { id: "mobile", label: "Mobile", type: "number" },
        { id: "sex", label: "Sex", type: "text" },
        {
          id: "govtid",
          label: "Govt Issued ID",
          type: "text",
          prefix: true,
          options: [
            { label: "Aadhar Card", value: "aadhar" },
            { label: "Pan Card", value: "pan" },
            { label: "Voter ID", value: "voter" },
          ],
        },
      ],
    },
    {
      heading: "Contact Details",
      fields: [
        {
          id: "guardianD",
          label: "Guardian Details",
          type: "text",
          prefix: true,
          options: [
            { label: "Miss", value: "miss" },
            { label: "Mrs", value: "mrs" },
            { label: "Ms", value: "ms" },
          ],
        },
        { id: "email", label: "Email", type: "email" },
        { id: "emergency_mobile", label: "Emergency Contact No", type: "tel" },
      ],
    },
    {
      heading: "Address Details",
      fields: [
        { id: "address", label: "Address", type: "text" },
        {
          id: "state",
          label: "State",
          type: "text",
          prefix: true,
          options: [
            { label: "Madhya Pradesh", value: "mp" },
            { label: "Utter Pradesh", value: "up" },
            { label: "Unites State", value: "ut" },
          ],
        },
        {
          id: "city",
          label: "City",
          type: "text",
          prefix: true,
          options: [
            { label: "Bhoapl", value: "bhopal" },
            { label: "Chattisgarh", value: "chattisgarj" },
            { label: "California", value: "california" },
          ],
        },
        { id: "pincode", label: "PinCode", type: "number" },
        {
          id: "country",
          label: "Country",
          type: "text",
          prefix: true,
          options: [
            { label: "India", value: "india" },
            { label: "America", value: "America" },
            { label: "London", value: "London" },
          ],
        },
      ],
    },
    {
      heading: "Other Details",
      fields: [
        { id: "occupation", label: "Occupation", type: "text" },
        {
          id: "religion",
          label: "Religion",
          type: "text",
          prefix: true,
          options: [
            { label: "Hindusm", value: "hindusm" },
            { label: "Buddhism", value: "buddhism" },
            { label: "Christianity", value: "christianity" },
          ],
        },
        {
          id: "blood_group",
          label: "Blood Group",
          type: "text",
          prefix: true,
          options: [
            { label: "A+", value: "a+" },
            { label: "B+", value: "b+" },
            { label: "AB+", value: "ab+" },
          ],
        },
        {
          id: "nationality",
          label: "Nationality",
          type: "text",
          prefix: true,
          options: [
            { label: "Indian", value: "indian" },
            { label: "American", value: "American" },
            { label: "London", value: "London" },
          ],
        },
      ],
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{

  })

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {formFields.map((section, index) => (
         <Container maxWidth="xl">
         <Grid item xs={12} key={index}>
            <h3>{section.heading}</h3>
            <Grid container spacing={2}>
              {section.fields.map((field, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <div>
                    <label htmlFor={field.id}>{field.label}</label>
                    {field.type === "select" ? (
                      {/* <select
                        id={field.id}
                        onChange={handleSelectChange}
                        required
                      >
                        {field.options.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select> */}
                    ) : (
                      <>
                        {field.prefix && (
                          <select
                        id={field.id}
                        onChange={handleSelectChange}
                        required
                      >
                        {field.options.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                        )}
                        <input
                        className="textField"
                          id={field.id}
                          type={field.type}
                          value={formData[field.id]}
                          onChange={handleInputChange}
                          required
                        />
                      </>
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
         </Container>
        ))}
      </Grid>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;

