import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const AnimateButton = () => {
  return (
    <>
      <div className="hidden md:block absolute md:left-36 left-6 md:top-20 top-4">
        <div className="flex items-center gap-3">
          <MdOutlineKeyboardDoubleArrowRight className="text-white text-xl font-semibold animate-slide-right" />
          <Link href="#video">
            <button className="text-white text-[12px] md:text-[15px] border border-[#56c96f] accent-bg py-2 px-3 rounded-md ms-3 hover:bg-white hover:text-[#56c96f]">
              Video Explicative
            </button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(15px);
          }
          100% {
            transform: translateX(0);
          }
        }
        :global(.animate-slide-right) {
          animation: slideRight 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default AnimateButton;
