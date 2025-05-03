"use client";

import Editor from "@/components/editor/Editor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Write = () => {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const onChange = (content: string) => {
    setPostContent(content);
  };

  const resetForm = () => {
    setTitle("");
    setPostContent("");
    setFile(null);
    setCategory("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", postContent);
    formData.append("category", category);
    if (file) {
      formData.append("image", file);
    }

    try {
      const res = await axios.post("/api/article", formData);
      if (res.status === 200) {
        resetForm();
        router.push("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err?.response?.data?.error || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Link
            href="/"
            className="inline-flex items-center gap-1 px-6 py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-950 hover:text-white"
          >
            <IconArrowLeft stroke={2} /> Go Back
          </Link>
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-semibold mt-5 mb-10">New Article</h1>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-xl text-white cursor-pointer ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gray-950 hover:opacity-90"
              }`}
            >
              {isSubmitting ? "Publishing..." : "Publish"}
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            className="text-3xl w-full border-b border-gray-300 py-3 focus:outline-0"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
          />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture" className="text-xl">
              Featured Image
            </Label>
            <Input
              id="picture"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              disabled={isSubmitting}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="category" className="text-xl">
              Category
            </Label>
            <Input
              type="text"
              id="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <label className="text-xl">Content</label>
          <Editor onChange={onChange} content={postContent} />

          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Write;
