"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
};

const Pagination = ({ page, hasPrev, hasNext }: Props) => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-between mt-5">
      <Button
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </Button>
      <Button
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
