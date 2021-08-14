import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center h-auto w-full p-8 bg-gray-300">
      <div className="flex items-center">
        <MdCopyright className="font-bolder text-lg"></MdCopyright>
        <p>2021, Asif Azad.</p>
      </div>
      <p>All rights reserved.</p>
    </div>
  );
}

export default Footer;
