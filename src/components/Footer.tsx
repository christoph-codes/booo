import { BiSolidHeart } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="p-4 rounded-t-lg bg-purple_dark mt-16">
      <p className="text-md text-center text-gray-500">
        Page created with <BiSolidHeart className="inline text-orange" /> love
        by{" "}
        <a
          className="hover:text-purple text-orange transition ease-in-out duration-300"
          href="https://thekirkconcept.com"
          target="_blank"
        >
          The Kirk Concept
        </a>
      </p>
    </footer>
  );
};

export default Footer;
