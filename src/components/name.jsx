import React from 'react'
import { motion } from 'framer-motion'
import './namee.css'

export default function Name ()  {
  return (
    <motion.div class="italic grid m-6 text-center text-5xl font-bold mt-20"
    animate={{ y:50, scale: 0.9 }}
    >Shivam Sharma,Developer</motion.div>
    
  )
}
