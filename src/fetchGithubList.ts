import { Root } from "./interface/GithubRespones";

const fetchGithubList = async ({ pageParam = 1 }): Promise<Root> => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=created:>2024-07-15&sort=stars&order=desc&page=${pageParam}`,
  );

  if (!res.ok) {
    throw new Error(`Github list fetch error`);
  }
  return res.json();
};

export default fetchGithubList;
