import React, { useState } from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { Console } from 'console';
const Typography_component = () => {

   const intialstate={
     name:"",
     password:"",
     email:"",
     subscribe:false,
     currency:"",
     gender:""

   };
   
   const [inputs,setInputs]=useState(intialstate);


   const  handleChange=(e:any)=>{
      setInputs((prevstate)=>({
        ...prevstate,
        [e.target.name]: e.target.value,
    
      }))

      //console.log(inputs);
      
        
   };

    const handlesubmit=(e:any)=>
    {
        e.preventDefault()
        console.log(inputs);
    }




    return (<div>
      <form onSubmit={handlesubmit}>  
     <TextField  fullWidth onChange={handleChange} name='name'   value={inputs.name}  type = {'text'} sx={{ margin : 3 }}  placeholder='name' variant='standard'></TextField>
     <br></br>
     <TextField  fullWidth onChange={handleChange} name='password' value={inputs.password}  type = {'password'} sx={{ margin : 3 }}  placeholder= "password" variant='filled'></TextField>
     <br></br>
     <TextField  fullWidth onChange={handleChange}  name='email' value={inputs.email} type = {'email'} sx={{ margin : 3 }} placeholder= "email" variant='outlined'></TextField>
     <br></br>
        <FormGroup>
            <FormControlLabel control={<Checkbox  name='subscribe'  onChange={()=>setInputs((prev)=>({...prev,
            subscribe: !inputs.subscribe,}))}/>} label="subscribe to newsletter"></FormControlLabel>
        </FormGroup>

        <FormControl fullWidth> 
            <InputLabel> currency </InputLabel>
            <Select name="currency" value={inputs.currency} label="curreny"  onChange={handleChange}>
            <MenuItem value={"dollar"}>Dollar</MenuItem>
            <MenuItem value={"Indian rupee"}>Indian rupee</MenuItem>
            <MenuItem value={"russian ruble"}>russian ruble</MenuItem>
            </Select>
        </FormControl>

        <FormControl>
  
  <FormLabel >Gender</FormLabel>
  <RadioGroup
    defaultValue="female"
    name="gender" onChange={handleChange}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>

 <br></br>
     <Button type="submit" >       Submit</Button>
     </form> 
             </div>);
}


export default Typography_component;