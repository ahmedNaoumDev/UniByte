"use client";
import Image from "next/image";
import React, { useState } from "react";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const closeMenu = () => {
  //     set
  // }
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="/uniByte.svg" // Path to your image inside the 'public' directory
              alt="UniByte Logo"
              width={50} // Set the width
              height={50} // Set the height
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setToggleMenu(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Events
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Team
          </a>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Join</a> */}
          <a
            href="mailto:unibyte.cs@gmail.com"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5oJaBGXfDEy62SMqDQlx7R-CC7LqhOhsVBw7KzVrWdkbAvg/viewform"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Join us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {toggleMenu == true && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">UniByte</span>
                <Image
                  src="/uniByte.svg" // Path to your image inside the 'public' directory
                  alt="UniByte Logo"
                  width={50} // Set the width
                  height={50} // Set the height
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setToggleMenu(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Events
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Team
                  </a>

                  <a
                    href="mailto:unibyte.cs@gmail.com"
                    target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe5oJaBGXfDEy62SMqDQlx7R-CC7LqhOhsVBw7KzVrWdkbAvg/viewform"
                    target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Join us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
