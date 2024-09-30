import React from 'react'
import { motion } from "framer-motion";

const HoverIcon = ({
    children,
    size = 80, // ขนาดของไอคอนหรือรูปภาพ
    className = ""
  }) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
      whileHover={{
        scale: 1, // ขยายขนาดขึ้นเมื่อ hover
        rotate: [0, 5, -5, 0], // หมุนไปทางซ้ายและขวา
        transition: {
          duration: 1, // ระยะเวลาของอนิเมชั่น
          repeat: Infinity, // ทำซ้ำต่อเนื่อง
          repeatType: "reverse" // หมุนกลับไปกลับมา
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default HoverIcon