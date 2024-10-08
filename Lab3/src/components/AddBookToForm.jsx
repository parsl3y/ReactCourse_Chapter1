import React, { useState } from 'react';

function AddBookToForm({ onAddToDo }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "The first name is required";
    if (!lastName) newErrors.lastName = "The last name is required";
    if (!phone) newErrors.phone = "The phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onAddToDo({ firstName, lastName, phone });
      setFirstName('');
      setLastName('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>
      <div>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBookToForm;
