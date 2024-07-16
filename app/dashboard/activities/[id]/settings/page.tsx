"use client";

import { useSearchParams, useParams } from "next/navigation";

const page = () => {
  const params = useParams();

  console.log(params, "hello there");
  return <div>page</div>;
};

export default page;
