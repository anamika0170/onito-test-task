export const formData = {
  name: "",
  dob: "",
  sex: "",
  mobile: "",
  govtId: "",
  guardianDetail: "",
  email: "",
  emerg_no: "",
  address: "",
  state: "",
  city: "",
  country: "",
  pincode: "",
  occupation: "",
  religion: "",
  marital: "",
  blood_group: "",
  nationality: "",
};

export const personalDetails = [
  {
    name: "name",
    value: formData.name,
    className: "textField",
    label: "Name",
    type:"text",
    labelClassName: "inputLabel",
  },
  {
    name: "dob",
    value: formData.dob,
    className: "textField",
    label: "Date of Birth Age",
    type: "date",
    labelClassName: "inputLabel",
  },
  {
    name: "sex",
    value: formData.sex,
    className: "textField",
    label: "Sex",
    type: "text",
    labelClassName: "inputLabel",
  },
  {
    name: "mobile",
    value: formData.mobile,
    className: "textField",
    label: "Mobile",
    type: "number",
    labelClassName: "inputLabel",
  },
  {
    name: "govtId",
    value: formData.govtId,
    className: "textField",
    label: "Govt Issued ID",
    type: "text",
    selectData: {
      name: "",
      value: "Govt_ID_Type",
      className: "textField",
    },
    options: [
      {
        label: "Aadhar-Card",
        value: "adharCard",
      },
      {
        label: "VoterId-Card",
        value: "voterCard",
      },
      {
        label: "Pan-Card",
        value: "panCard",
      },
    ],
    labelClassName: "inputLabel",
  },
];
export const contactDetails = [
  {
    name: "",
    value: "",
    className: "textField",
    label: "Guardian Details",
    type: "text",
    options: [
      {
        label: "Miss",
        value: "miss",
      },
      {
        label: "Mrs",
        value: "mrs",
      },
      {
        label: "Ms",
        value: "ms",
      },
    ],
    selectData: {
      name: "",
      value: "Gardian-Prefix",
      className: "textField",
    },
    labelClassName: "inputLabel",
  },
  {
    name: "",
    value: "",
    className: "textField",
    label: "Email",
    type: "email",
    labelClassName: "inputLabel",
  },
  {
    name: "",
    value: "",
    className: "textField",
    type: "number",
    label: "Emergency Contact Number",
    labelClassName: "inputLabel",
  },
];
export const addressDetails = [
  {
    name: "",
    value: "",
    className: "textField",
    label: "Address",
    labelClassName: "inputLabel",
    type:"text",
  },
  {
    name: "",
    value: "",
    className: "textField",
    label: "City",
    type:"text",
    options: [
      {
        label: "Bhopal",
        value: "bhopal",
      },
      {
        label: "Indore",
        value: "indore",
      },
    ],
    labelClassName: "inputLabel",
  },
  {
    name: "",
    value: "",
    className: "textField",
    label: "Country",
    options: [
      {
        label: "India",
        value: "india",
      },
      {
        label: "Jurmony",
        value: "jurmony",
      },
    ],
    labelClassName: "inputLabel",
  },
  {
    name: "",
    value: "",
    type:"text",
    className: "textField",
    label: "State",
    options: [
      {
        label: "Madhya Pradesh",
        value: "mp",
      },
      {
        label: "Utther Pradesh",
        value: "up",
      },
    ],
    labelClassName: "inputLabel",
  },
  {
    name: "",
    value: "",
    className: "textField",
    label: "Pincode",
    labelClassName: "inputLabel",
    type:"number"
  },
];
export const otherDetails = [
  {
    name: "",
    value: "",
    className: "textField",
    label: "Occupation",
    labelClassName: "inputLabel",
    type:"text"
  },
  {
    name: "",
    value: "",
    className: "textField",
    label: "Religion",
    type:"text",
    options: [
      {
        label: "Sister",
        value: "siter",
      },
      {
        label: "Brother",
        value: "brother",
      },
    ],
    labelClassName: "inputLabel",
  },
  {
    name: "",
    value: "",
    className: "textField",
    label: "Merital Status",
    options: [
      {
        label: "Merried",
        value: "merried",
      },
      {
        label: "Unmerried",
        value: "unmerried",
      },
    ],
    labelClassName: "inputLabel",
    type:"text"
  },
  {
    name: "",
    value: "",
    className: "textField",
    label: "Blood Group",
    type:"text",
    options: [
      {
        label: "A+",
        value: "a+",
      },
      {
        label: "B+",
        value: "b+",
      },
      {
        label: "O+",
        value: "o+",
      },
      {
        label: "O-",
        value: "o-",
      },
      {
        label: "AB+",
        value: "ab+",
      },
    ],
    labelClassName: "inputLabel",
  },
  {
    name: "",
    value: "",
    className: "textField",
    label: "Nationality",
    type:"text",
    options: [
      {
        label: "India",
        value: "india",
      },
      {
        label: "Jurmony",
        value: "jurmony",
      },
    ],
    labelClassName: "inputLabel",
  },
];
