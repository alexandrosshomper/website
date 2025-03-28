// LeadGenerationForm.jsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Devices, Colors } from "../DesignSystem";

const FormHeadline = styled.h2`
  font-size: 48px;
  line-height: 1.0834933333;
  font-weight: 600;
  letter-spacing: -0.003em;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  position: relative;

  padding-bottom: 40px;
`;
const InputField = styled.input`
  color: #1d1d1f;

  border-color: ${({ isValid }) => (isValid === false ? "#e30000" : "#d2d2d7")};
  background-color: ${({ isValid }) =>
    isValid === false ? "#fff2f4" : "rgba(255, 255, 255, 0.8);"};
  text-overflow: ellipsis;

  font-size: 17px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  width: 100%;
  height: 3.29412rem;
  border-radius: 12px;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  margin-bottom: 0;
  padding: 1.05882rem 0.94118rem 1.05882rem 0.94118rem;
  text-align: left;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-width: 2px;
    border-color: #0071e3;
    box-shadow: 0 0 0 4px rgba(0, 125, 250, 0.6);
  }
`;

const ButtonMedium = styled.button`
  align-items: flex-start;
  appearance: auto;

  background-color: ${({ disabled }) => (disabled ? "grey" : "green")};

  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;

  border-bottom-style: none;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;

  border-bottom-width: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;

  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;

  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);

  color: rgba(255, 255, 255, 1);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  direction: ltr;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin: 0px;
  min-width: 51px;

  overflow-x: visible;
  overflow-y: visible;

  padding: 16px 32px;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 130%;

  quotes: "“" "”";
  text-align: center;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: none;
  vertical-align: baseline;

  letter-spacing: -0.02em;

  word-spacing: 0px;
  writing-mode: horizontal-tb;
  -webkit-font-smoothing: antialiased;
  border-image: none;
  -webkit-border-image: none;

  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  &:visited {
    text-decoration: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const ErrorMessage = styled.p`
  position: absolute;
  top: 56px;
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;
const FormWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  background-color: white;

  margin-top: 20px;
  margin-bottom: 40px;

  direction: ltr;

  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;

  overflow-x: hidden;
  overflow-y: hidden;

  text-align: left;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;

  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;

  max-width: 90%;
  ${Devices.tabletS} {
    width: 564px;
  }
  ${Devices.tabletM} {
    width: 708px;
  }
  ${Devices.laptopS} {
    width: 740px;
  }
  ${Devices.laptopM} {
  }
`;
const LeadGenerationForm = ({ portal, form, size }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleEmailBlur = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Email address is a mandatory field.");
    } else if (value && !validateEmail(value)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError(null);
      handleButtonActive();
    }
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setName(value);
  };
  const handleNameBlur = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setName(value);
    if (!value) {
      setNameError("Name address is a mandatory field.");
    } else {
      setNameError(null);
      handleButtonActive();
    }
  };

  const handleButtonActive = async (e) => {
    if (name && !nameError && email && !emailError && !loading) {
      setButtonActive(true);
    } else setButtonActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError) return; // Prevent submission if email is invalid

    setLoading(true);
    setMessage(null);

    const portalId = portal;
    const formId = form;

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const data = {
      fields: [
        { name: "firstname", value: name },
        { name: "email", value: email },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Success! Check your inbox for the document.");
        setName("");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <FormHeadline>Get your free copy of the report</FormHeadline>
      <Form onSubmit={handleSubmit}>
        <InputFields style={{ marginBottom: "10px" }}>
          <InputFieldWrapper>
            <InputField
              type="text"
              placeholder="First Name*"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              isValid={nameError === null}
              required
            />
            {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
          </InputFieldWrapper>
          <InputFieldWrapper>
            <InputField
              type="email"
              placeholder="Email*"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              isValid={emailError === null}
              required
            />{" "}
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </InputFieldWrapper>
        </InputFields>

        <ButtonMedium type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </ButtonMedium>
      </Form>
      {message && <p>{message}</p>}
    </FormWrapper>
  );
};

export default LeadGenerationForm;
