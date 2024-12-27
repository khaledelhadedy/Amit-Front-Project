"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Our Terms & Conditions
          </h2>
          <p className="text-gray-700 mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the like.
          </p>
          <p className="text-gray-700 mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <hr className="my-6" />
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Where does it come from?
          </h3>
          <p className="text-gray-700 mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <ol className="list-decimal list-inside mb-6 text-gray-700">
            <li>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur.
            </li>
            <li>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur.
            </li>
            <li>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore.
            </li>
            <li>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet.
            </li>
          </ol>
          <hr className="my-6" />
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Why do we use it?
          </h3>
          <p className="text-gray-700 mb-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </li>
            <li>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
