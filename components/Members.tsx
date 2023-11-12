import Image from "next/image";
import React from "react";

function Members() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet Our Visionaries at UniByte
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Embark on this journey with our brilliant minds who lead the way at UniByte, shaping the future of technology and innovation. Their commitment to excellence drives our club&apos;s mission to inspire, educate, and elevate the computer science community.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-6">
            <Image
                className="h-16 w-16 rounded-full"
                src="/Korichi.jpg"
                alt=""
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Korichi Sondos
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Leader
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
            <Image
                className="h-16 w-16 rounded-full"
                src="/Amir.jpg"
                alt=""
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Mohammedi Amir
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  SubLeader
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
            <Image
                className="h-16 w-16 rounded-full"
                src="/Nor.jpg"
                alt=""
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Khelloufi Nour
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Writer
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
            <Image
                className="h-16 w-16 rounded-full"
                src="/Brahim.png"
                alt=""
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Khattara Brahim
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Scientific & Cultural magazine
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Image
                className="h-16 w-16 rounded-full"
                src="/Ilyes.jpg"
                alt=""
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Fekhar Ilyes
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Media officer
                </p>
              </div>
            </div>
          </li>

          {/* <!-- More people... --> */}
        </ul>
      </div>
    </div>
  );
}

export default Members;
