import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export const Card = ({ icon, title, description, href }: CardProps) => {
  return (
    <a
      href={href}
      className="not-prose group border transition-colors
      rounded-lg dark:bg-neutral-900 block card h-full
      text-black dark:text-white
      hover:bg-gray-50 dark:hover:bg-neutral-800
      "
  >
    <div
      className="p-8 w-full h-full flex flex-col"
    >
        <div className="flex items-center">
            {icon}
        </div>
          <p
            className="font-semibold text-xl"
          >
            { title }
          </p>
        <p
          className="mt-4 text-sm font-medium opacity-70"
        >
          { description }
        </p>
    </div>
  </a>
  )
}