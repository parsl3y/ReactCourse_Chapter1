import React, { useState } from 'react';

function ListItems({ item, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(item.firstName);
  const [lastName, setLastName] = useState(item.lastName);
  const [phone, setPhone] = useState(item.phone);
  const [errors, setErrors] = useState({});

  const handleUpdate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    onUpdate(item.id, { firstName, lastName, phone });
    setIsEditing(false); 
    setErrors({}); 
  };

  return (
    
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setErrors((prev) => ({ ...prev, firstName: '' })); 
            }}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
          
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setErrors((prev) => ({ ...prev, lastName: '' })); 
            }}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
          
          <input
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setErrors((prev) => ({ ...prev, phone: '' })); 
            }}
          />
          {errors.phone && <p>{errors.phone}</p>}
          
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
           <span>{item.id} </span>
          <span>{item.firstName} {item.lastName} - {item.phone}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default ListItems;
