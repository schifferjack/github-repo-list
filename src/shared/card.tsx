import { Item } from "../interface/GithubRespones";

const Card = (props: Item) => {
  return (
    <div className="w-full bg-white h-[200px] p-4 rounded-md shadow-md">
      <p className="font-bold text-xl">{props.owner.login}</p>
      <div className="h-full flex items-center  gap-4">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="rounded-full h-[50px] w-[50px] border border-black overflow-hidden">
            <img
              src={props.owner.avatar_url}
              alt="avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-2xl font-semibold">{props.name}</p>
          <p>{props.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <p>{props.stargazers_count}</p>
          <img src="src/assets/star.svg" alt="" className="h-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default Card;

// repo name
// repo desc
// num of stars
// username and avatar of owner
