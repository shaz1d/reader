"use client";

import { createComment } from "@/lib/actions";
import { useActionState, useEffect, useState } from "react";

const initialState = { error: "", success: false };

export default function CommentForm({ slug }: { slug: string }) {
  const [state, formAction] = useActionState(createComment, initialState);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (state?.error || state?.success) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [state]);
  return (
    <div>
      <form action={formAction} className="relative">
        <textarea
          name="desc"
          required
          rows={8}
          className="w-full bg-gray-100 rounded-3xl p-6"
          placeholder="Add comment..."
        />
        <input type="hidden" name="postSlug" value={slug} />
        <input
          type="submit"
          value="Submit"
          className="px-8 py-3 rounded-full bg-gray-950 text-white absolute right-3 bottom-4 cursor-pointer"
        />
      </form>
      {visible && state?.error && <p className="text-red-500">{state.error}</p>}
      {visible && state?.success && (
        <p className="text-green-600">Comment added!</p>
      )}
    </div>
  );
}
