"use client";

import Editor from "@/components/editor/Editor";
import {
  IconArrowLeft,
  IconImageInPicture,
  IconPlus,
  IconVideo,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

const Write = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-5 items-start">
            <Link
              href="/"
              className="flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white transition-colors"
            >
              <IconArrowLeft stroke={2} /> Go Back
            </Link>{" "}
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-semibold mt-5 mb-10">New Article</h1>
            <button className="flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-950 rounded-xl text-sm bg-gray-950 text-white transition-colors">
              Publish
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            className="text-3xl w-full border-b border-gray-300 py-3 focus:outline-0"
          />
          <div className="my-5 flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-3 py-3  rounded-xl text-sm bg-gray-950 text-white transition-colors border border-gray-950"
            >
              <IconPlus stroke={2} />{" "}
            </button>
            {isOpen && (
              <div className="flex gap-2">
                <button className="flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white transition-colors">
                  <IconImageInPicture /> Image
                </button>
                <button className="flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white transition-colors">
                  <IconImageInPicture /> External Image
                </button>
                <button className="flex items-center gap-1 cursor-pointer font-semibold font-[family-name:var(--font-geist-sans)] px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white transition-colors">
                  <IconVideo /> Video
                </button>
              </div>
            )}
          </div>

          <Editor />
        </div>
      </section>
    </>
  );
};

export default Write;
