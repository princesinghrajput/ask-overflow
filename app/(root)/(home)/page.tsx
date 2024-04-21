import HomeFilters from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { title } from "process";

const questions = [
  // {
  //   _id: 1,
  //   title: "Casceding deletes in SQLALchemy?",
  //   tags: [
  //     { _id: 1, name: "python" },
  //     { _id: 2, title: "SQL" },
  //   ],
  //   author: "Prince",
  //   upvotes: 10,
  //   views: 100,
  //   answer: 2,
  //   createdAt: "2024-04-01T12:00:00.000Z",
  // },
  // {
  //   _id: 2,
  //   title: "Fetching data from mongodb?",
  //   tags: [
  //     { _id: 1, name: "mongodb" },
  //     { _id: 2, title: "mongoose" },
  //   ],
  //   author: "Prince",
  //   upvotes: 10,
  //   views: 100,
  //   answer: 2,
  //   createdAt: "2024-04-01T12:00:00.000Z",
  // },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark-100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Questions
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={[]}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Looping through question */}
        {questions.length > 0 ? (
          questions.map((question) => {
            return "QuestionCard";
          })
        ) : (
          <NoResult
            title="There is no question to show"
            description=" Be the first to break the silence! 🚀 Ask a question and kickstart the
          discussion. Our query could be the next big thing others learn from. Get
          Involved!💡"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
}
