'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const container = {
  width: 60,
  height: 30,
  cursor: 'pointer',
  display: 'flex',
  padding: 10,
};

const handle = {
  width: 20,
  height: 20,
  borderRadius: '50%',
};

const ThemeToggle = () => {
  const [isOn, setIsOn] = useState(true);
  const { setTheme, theme } = useTheme();

  const toggleSwitch = () => setIsOn(!isOn);
  if (isOn) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  return (
    <div className="relative">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ rotate: isOn ? 20 : -20 }} className="fixed z-50 top-7 right-6 lg:right-25">
        <Button
          className="toggle-container rounded-2xl  bg-secondary-foreground/20 hover:bg-secondary-foreground/20 backdrop-blur-sm"
          style={{
            ...container,
            justifyContent: 'flex-' + (isOn || theme === 'dark' ? 'start' : 'end'),
          }}
          onClick={toggleSwitch}>
          <motion.div
            className="toggle-handle bg-secondary-foreground"
            style={handle}
            layout
            transition={{
              type: 'spring',
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          />
        </Button>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
