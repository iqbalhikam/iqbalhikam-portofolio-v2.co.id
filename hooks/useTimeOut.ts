import { useEffect, useState } from "react";

export const UseTimeOut = (delay: number) => {
      const [showApp, setShowApp] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setShowApp(true);
        }, delay); // Delay 2 detik
    
        return () => clearTimeout(timer); // Membersihkan timeout saat unmount
      }, [delay]);
      return showApp
}


