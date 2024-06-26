"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
} from "../../components/material-tailwind-component/material-tailwind";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

interface Props {
  isScrolled: boolean;
  setIsLeftSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRightSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const QuranHeader = ({
  isScrolled,
  setIsLeftSideOpen,
  setIsRightSideOpen,
}: Props) => {
  return (
    <header className={`bg-white z-10 sticky top-0 border-b-2`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 gap-5 lg:gap-0">
        <Button
          variant="text"
          size="md"
          className="capitalize gap-2 text-md items-center lg:flex hidden"
        >
          Al-Fathihah
          <Icon icon="ep:arrow-down" />
        </Button>
        <Button
          onClick={() => setIsLeftSideOpen((prev: boolean) => !prev)}
          variant="text"
          size="sm"
          className="capitalize gap-1 flex text-md items-center lg:hidden "
        >
          <h2 className="whitespace-nowrap text-sm">Al-Fathihah</h2>
          <Icon icon="ep:arrow-down" className="text-xs" />
        </Button>
        <div className="relative border rounded-full">
          <label className="sr-only" htmlFor="search">
            Search
          </label>

          <input
            className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm lg:w-96  border"
            id="search"
            type="search"
            placeholder="Search from Quran..."
          />

          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-md hidden lg:flex">
            Juz 1/Hijb 1 - <strong>Page 1</strong>
          </h1>
          <a
            href="#"
            className=" shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 hidden lg:block"
          >
            <span className="sr-only">Notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a>
          <IconButton
            onClick={() => setIsRightSideOpen((prev: boolean) => !prev)}
            variant="text"
            size="sm"
            className="flex items-center justify-center lg:hidden"
          >
            <Icon
              icon="pepicons-pencil:menu-circle"
              className="text-2xl mt-1"
            />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
