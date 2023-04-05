import { useState } from "react";
import styled from "styled-components";

function WorkOutForm() {
  const [formData, setFormData] = useState({
    title: "",
    year: new Date().getFullYear(),
    parti: "",
    description: "",
    user_url: "",
    category: "",
    discount: false,
    female_director: false,
  });

  const [errors, setErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    // fetch returns a Promise, we must await it
    const response = await fetch("https://serenity-server.onrender.com/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // response.json() returns a Promise, we must await it
    const data = await response.json();
    if (response.ok) {
      console.log("User Added created:", data);
    } else {
      setErrors(data.errors);
    }
  }

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="title">Title: Gym or Yoga</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            min="2000"
            max={new Date().getFullYear()}
            value={formData.year}
            onChange={handleChange}
            className="input"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="parti">name</label>
          <input
            type="text"
            id="parti"
            value={formData.parti}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="user_url">User Picture</label>
          <input
            type="text"
            id="user_url"
            value={formData.user_url}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={formData.category}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="discount">
            Discount?
            <input
              type="checkbox"
              id="discount"
              checked={formData.discount}
              onChange={handleChange}
            />
          </label>
        </FormGroup>
        <FormGroup>
          <label htmlFor="female_director">
            Female Director?
            <input
              type="checkbox"
              id="female_director"
              checked={formData.female_director}
              onChange={handleChange}
            />
          </label>
        </FormGroup>
        <SubmitButton type="submit">Add New Member</SubmitButton>
      </form>
      {
        errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )
      }

    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 32px auto;
  padding: 32px;
  background: red
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  input[type=text] {
    padding:10px;
    border:0;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  }
`;

const SubmitButton = styled.button`
  background: pink;
  width: 100%;
  border-radius: 10px;
  color: #000;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  padding: 14px 16px;
  cursor: pointer;
`;


export default WorkOutForm;


































