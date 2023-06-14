import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
    <li ref={ref}>
    <button onClick={() => setDropdown((prev) => !prev)}>
      Services <span>&#8595;</span>
    </button>
    {dropdown && (
      <ul>
        <li>Design</li>
        <li>Development</li>
      </ul>
    )}
  </li>
  );
};
export default Navbar;
