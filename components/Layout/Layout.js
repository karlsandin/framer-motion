import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Container = styled.div`
  height: 100%;
  padding: 50px;
`;

const Layout = ({ children }) => (
  <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: "linear" }}
  >
    {children}
  </motion.main>
);

export default Layout;
