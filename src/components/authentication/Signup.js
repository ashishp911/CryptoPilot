import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'

const Signup = ({handleClose}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  const handleSubmit = () => {

  }
    return (
    <Box p={3}
    style = {{display:"flex", flexDirection:"column", gap:"20px"}}>
    
    <TextField 
    variant='outlined'
    type='email'
    label="enter email"
    value={email}
    onChange={(e) => {
        setEmail(e.target.value)
    }}
    fullWidth
    />

    <TextField 
    variant='outlined'
    type='password'
    label="enter password"
    value={password}
    onChange={(e) => {
        setPassword(e.target.value)
    }}
    fullWidth
    />

    <TextField 
    variant='outlined'
    type='Confirm Password'
    label="enter Confirm Password"
    value={confirmPassword}
    onChange={(e) => {
        setConfirmPassword(e.target.value)
    }}
    fullWidth
    />

    {/* Signup button */}
    <Button 
    variant='contained'
    size='large'
    style={{backgroundColor: "#EEBC1D"}}
    onClick={handleSubmit}
    >Signup</Button>
    </Box>
  )
}

export default Signup
