import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, delay, motion } from "framer-motion";
import { Avatar } from "@mui/material";
import useToggle from "../hooks/useToggle";
import { useLogout } from "../hooks/useLogout";
import { useUserContext } from "../hooks/useUserContext";

const NavBarComponent = () => {
  const { value, toggleValue } = useToggle(false);
  const { logout } = useLogout();
  const { user } = useUserContext();

  return (
    <div className="fixed w-full z-20 bg-white">
      <header className="relative w-full flex justify-between px-5 py-2 items-center shadow-xl">
        <div className="text-[20px]">
          <button onClick={() => toggleValue(!value)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="flex gap-2">
          {user && <h1 className="py-2 font-semibold">{user.email}</h1>}
          <Avatar alt="Remy Sharp" src="" />
        </div>
      </header>
      {value && (
        <AnimatePresence>
          <motion.div
            className={`bg-secondary  w-[200px] absolute z-20 left-5 rounded-xl top-10 p-5`}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
            transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
          >
            <motion.ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
              transition={{ type: "spring", stiffness: 100, duration: 1 }}
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </button>
              </li>
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavBarComponent;
