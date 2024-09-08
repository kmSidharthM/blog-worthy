import React from "react";

const Sidebar = () => (
  <div className="fixed left-0 top-0 flex h-full w-32 flex-col items-center justify-between bg-neutral-900 py-8">
    <svg
      fill="gold"
      height="40"
      viewBox="0 0 24 24"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 15L15 20.996L4.00221 21C3.4487 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.45576 21 4.00247V15ZM19 5H5V19H13V14C13 13.4872 13.386 13.0645 13.8834 13.0067L14 13L19 12.999V5ZM18.171 14.999L15 15V18.169L18.171 14.999Z" />
    </svg>
    <svg
      fill="gold"
      height="40"
      viewBox="0 0 24 24"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
    </svg>
  </div>
);

export default Sidebar;
