import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const SubHeader = () => {
  return (
    <section>
      <div className="container mx-auto py-2 px-5 md:px-0">
        <div className="flex justify-between">
          <div className="">
            <div className="flex items-center gap-3">
              <FaEnvelope className="accent-color" />
              <Link
                href="mailto:contact@france-puits-canadien.fr"
                className="text-[#2e2e2e] text-[10px] md:text-[15px]"
              >
                contact@france-puits-canadien.fr
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="accent-color" />
              <Link
                href="callto:0757831203"
                className="text-[#2e2e2e] text-[10px] md:text-[15px]"
              >
                07 57 83 12 03
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
