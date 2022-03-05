import React from 'react';
export default function MyForm(props) {
    const [inputs, setInputs] = React.useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(props.moviename,inputs.username);
      localStorage.setItem('MovieName',props.moviename);
      localStorage.setItem('Name', inputs.username);
      localStorage.setItem('Age', inputs.age);
    }
     const remove = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('Age');
     };
  
    return (
      <form onSubmit={handleSubmit} className="form">
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
          
         <div>
            <button onClick={remove} className="remove-btn">Remove Booking</button>
         </div>
      </form>
    )
  }


