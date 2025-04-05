import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react"; 

export default function GetStartedPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500); // 1.5 second loader duration
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-background text-foreground">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Floating Animation Circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-40 w-40 bg-primary opacity-20 rounded-full top-20 left-10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-60 w-60 bg-secondary opacity-20 rounded-full bottom-20 right-10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center p-8 rounded-lg shadow-lg bg-card relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          className="text-5xl font-bold mb-4 flex flex-col gap-2"
        >
          Welcome to the Best Weather Web App
          <span
            className="font-extrabold text-amber-300"
            style={{
              textShadow: "0 0 10px rgba(251, 191, 36, 0.7)",
            }}
          >
            Klimate.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground mb-6"
        >
          Start your journey with us today.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block"
        >
          <Button
            onClick={handleGetStarted}
            className="bg-primary text-primary-foreground hover:bg-primary/80 overflow-hidden relative"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-1/2 bg-white opacity-20 rounded-full w-32 h-32 -translate-x-1/2 -translate-y-1/2"
            />
            <span className="relative z-10">Get Started</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
