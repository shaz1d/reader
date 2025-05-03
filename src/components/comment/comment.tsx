import { timeAgo } from "@/lib/utils";
import type { Comment, User } from "@prisma/client";
import Image from "next/image";
import React from "react";
type CommentProps = {
  comment: {
    user: User;
  } & Comment;
};
const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="flex gap-3 ">
      <Image
        className="rounded-full h-10 w-10"
        src={comment.user.image ? comment.user.image : "/author.jpg"}
        quality={100}
        height={40}
        width={40}
        alt="author"
        objectFit="cover"
      />
      <div className="mt-1">
        <p>
          <span className="font-medium text-lg">{comment.user.name}</span>{" "}
          <span className="mx-1">•</span>{" "}
          <span className="text-gray-950/60 text-sm">
            {timeAgo(comment.createdAt)}
          </span>
        </p>
        <p className="text-base text-gray-950/80 mt-2">{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
