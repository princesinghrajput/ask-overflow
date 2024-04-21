import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { title } from "process";

const questions = [
  {
    _id: "1",
    title: "Casceding deletes in SQLALchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "SQL" },
    ],
    author: {
      _id: "1",
      name: "Prince",
      picture: "url_to_prince_picture",
    },
    upvotes: 1000000877,
    views: 100,
    answer: [{ answerId: 1, text: "Sample answer text" }],
    createdAt: new Date("2024-04-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Fetching data from mongodb?",
    tags: [
      { _id: "3", name: "mongodb" },
      { _id: "4", name: "mongoose" },
    ],
    author: {
      _id: "1",
      name: "Prince",
      picture: "url_to_prince_picture",
    },
    upvotes: 500000,
    views: 100,
    answer: [{ answerId: 2, text: "Another sample answer text" }],
    createdAt: new Date("2024-04-01T12:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
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
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answer}
                createdAt={question.createdAt}
              />
            );
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
