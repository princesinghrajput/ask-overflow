import Question from "@/components/forms/Question";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <div>
        <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
        <div className="mt-9">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default Page;
