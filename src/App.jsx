
import { useState } from 'react'
import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField} from '@mui/material'
import * as React from 'react';
import './App.css'
import {Box,Typography} from '@mui/material'


function App() {

//states for validation 
const[InvalidName,setInavalidName]=useState(false)
const[InvalidContact,setInavalidContact]=useState(false)
const[InvalidEmail,setInavalidEmail]=useState(false)


// states for holding values
const[name,setName]=useState(null)
const[address,setAddress]=useState(null)
const[contact,setContact]=useState(0)
const[email,setEmail]=useState(null)
const[gender,setGender]=useState(null)
const[dob,setDob]=useState(null)



  // Course Select field mUI
  const [course,setCourse] = useState('');
  // const handleChange = (event) => {
  //   setCourse(event.target.value);
  // }


 const InputValues=(inputTag)=>{
    console.log(typeof inputTag);
    // destructring
    const{name,value}=inputTag
    // console.log(name, value);
    // console.log(!!value.match(/^[a-z A-Z]+$/));

    if(name=='name'){
      setName(value)
      if(!!value.match(/^[a-z A-Z]+$/)){
        setInavalidName(false)
      }else{
        setInavalidName(true)
      }
    }else if(name=='address'){
      setAddress(value)
    }else if(name=='contact'){
      setContact(value)
      if(!!value.match(/^\d{10}$/)){
        setInavalidContact(false)
      }else{
        setInavalidContact(true)
      }
    }else if(name=='email'){
      setEmail(value)
      if(!!value.match(/^[a-z0-9_\.\-]+[@][a-z]+[\.][a-z]{2,3}$/)){
        setInavalidEmail(false)
      }else{
        setInavalidEmail(true)
      }
    }else if(name=='gender'){
      setGender(value)
    }else if(name=='dob'){
      setDob(value)
    }else if(name=='course'){
      setCourse(value)
    }
 
 }

 const Registration=(e)=>{
     e.preventDefault()
  if(name && address && contact && email && gender && course){
    alert(`Data stored successfully
     Name: ${name}
     Address: ${address}
     Contact: ${contact}
     Email: ${email}
     Gender: ${gender}
     DOB:  ${dob}
     Course: ${course}
      `) && 
      setName(null)
      setAddress(null)
      setEmail(null)
      setContact(0)
      setGender(null)
      setDob(null)
      setCourse('')
      setInavalidName(false)
      setInavalidEmail(false)
      setInavalidContact(false) 
  }else{
    alert("please fill the form completely...!! ")
  }
 }

 const Reset=()=>{
  setName(null)
  setAddress(null)
  setEmail(null)
  setContact(0)
  setGender(null)
  setDob(null)
  setCourse('')
  setInavalidName(false)
  setInavalidEmail(false)
  setInavalidContact(false)
 }

  return (
    <>
       <form>
          <div style={{width:"100%", height:'100%'}} className=' p-5 formContainer'>
            <div style={{width:'600px'}} className='bg-primary text-light mx-auto p-3 text-center rounded '>
              <h1>Student Registration Form</h1>
              <p>Registration Form for XI-XII Batch 2025</p>
            </div>
    
            {/* Name */}
            <div className='text-center mt-4'>
              <TextField value={name||''}  name='name' onChange={(e)=>InputValues(e.target)} id="filled-basic" label="Name" variant="filled"  style={{width:'600px',backgroundColor:'white',borderRadius:'10px 10px 0px 0px'}}/>
            </div>
            {/* Name Validation */}
            {InvalidName && 
              <div className=' my-3 text-danger  fw-bolder' style={{marginLeft:'420px'}}>
                Invalid name...!!!
              </div>
            }
    
    
             {/* Address */}
             <div className='text-center mt-4'>
              <TextField 
              value={address||''}
              name='address' onChange={(e)=>InputValues(e.target)}
              style={{width:'600px',backgroundColor:'white',borderRadius:'10px 10px 0px 0px'}}
                id="filled-multiline-static"
                label="Address"
                multiline
                rows={4}
                
                variant="filled"
              />
            </div>
    
           
             {/* Contact */}
             <div className='text-center mt-4'>
            <TextField value={contact||''} name='contact' onChange={(e)=>InputValues(e.target)} id="filled-basic" label="Contact" variant="filled"  style={{width:'600px',backgroundColor:'white',borderRadius:'10px 10px 0px 0px'}}/>
            </div>
             {/* Contact Validation */}
             {InvalidContact && 
              <div className='text-danger fw-bolder my-3' style={{marginLeft:'420px'}}>
                Invalid contact...!!!
              </div>
            }
            
    
    
            {/* Email Address */}
            <div className='text-center mt-4'>
            <TextField value={email||''} name='email' onChange={(e)=>InputValues(e.target)} id="filled-basic" label="Email" variant="filled"  style={{width:'600px',backgroundColor:'white',borderRadius:'10px 10px 0px 0px'}}/>
            </div>
             {/* Email Validation */}
             {InvalidEmail && 
              <div className='text-danger fw-bolder my-3' style={{marginLeft:'420px'}}>
                Invalid email...!!!
              </div>
            }
    
    
            {/* Gender*/}
            <div className='text-center mt-4 '>
              <FormControl>
                <div className='d-flex bg-light' style={{width:'600px',borderRadius:'10px 10px 0px 0px',height:'55px'}}>
                  <FormLabel  id="demo-row-radio-buttons-group-label" className='p-2 mt-1 me-5'>Gender</FormLabel>
                  <RadioGroup
                  value={gender||''}
                  name='gender' onChange={(e)=>InputValues(e.target)}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </div>
              </FormControl>
              
            </div>
    
            {/* DOB */}
            <div  className='text-center mt-4 Date' >
              <Box sx={{ mt: 0 }}> 
                <TextField value={dob||''} name='dob' label='DOB' variant="filled" onChange={(e)=>InputValues(e.target)}   type="date"   fullWidth   sx={{ ml: 0 }}/>
              </Box>
            </div>
           
            {/*Course */}
            <div className='text-center mt-4'>
                <FormControl style={{width:'600px',backgroundColor:'white',borderRadius:'10px 10px 0px 0px'}} variant="filled" sx={{ m: 1, minWidth: 450}} className='ms-3'>
                  <InputLabel id="demo-simple-select-filled-label" >Course</InputLabel>
                  <Select 
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={course||''}
                    name='course' onChange={(e)=>InputValues(e.target)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Biology"}>Biology</MenuItem>
                    <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
                    <MenuItem value={"Commerce"}>Commerce</MenuItem>
                    <MenuItem value={"Humanities"}>Humanities</MenuItem>
                  </Select>
                </FormControl>
              </div>
  
    
            {/* buttons */}
              <Stack spacing={2} direction="row" style={{marginLeft:'630px'}} className='mt-4'>
                <Button type='submit' disabled={InvalidName || InvalidEmail || InvalidContact} onClick={Registration} variant="contained">Submit</Button>
                <Button  onClick={Reset} className='text-light border-light' variant="outlined">Reset</Button>
              </Stack>
    
          </div>
       </form>
    </>
  )
}

export default App
