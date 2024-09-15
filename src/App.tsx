import "./App.css";
import Card from "./shared/card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";
import fetchGithubList from "./fetchGithubList";

function App() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["params"],
    queryFn: fetchGithubList,
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = Math.ceil(lastPage.total_count / 30);
      const nextPage = allPages.length;
      return nextPage <= maxPages ? nextPage : undefined;
    },
    initialPageParam: 1,
  });
  const items = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <div className="p-8 w-full bg-slate-900">
      <h1 className="text-4xl font-bold text-white mb-4">
        Github Repository List
        <span className="ms-4">Pages: {24235}</span>
      </h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
      >
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-4">
              <Card {...item} />
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default App;
