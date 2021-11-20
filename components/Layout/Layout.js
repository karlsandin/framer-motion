import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
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
