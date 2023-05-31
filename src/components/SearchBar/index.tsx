import { ChangeEvent } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface SearchBarProps {
  filterByTitle: (searchValue: string) => void;
  numberOfPosts: number;
  searchValue: string;
  isLoadingPostsData: boolean;
}

export function SearchBar({
  filterByTitle,
  numberOfPosts,
  searchValue,
  isLoadingPostsData,
}: SearchBarProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    filterByTitle(newValue);
  };

  return (
    <SkeletonTheme baseColor="#040F1A" highlightColor="#1C2F41">
      {isLoadingPostsData ? (
        <div className="mx-4">
          <Skeleton
            height={80}
            className="mt-20 animate-pulse"
            containerClassName="flex-1"
          />
        </div>
      ) : (
        <div className="max-sm:mx-4">
          <div className="mt-20 flex justify-between">
            <h1 className="text-lg font-bold leading-normal text-base-subtitle">
              Publicações
            </h1>
            <span className="text-right text-sm leading-normal text-base-span">
              {numberOfPosts} publicações
            </span>
          </div>
          <div className="mt-3">
            <input
              className="flex w-full flex-row items-center gap-2 rounded-md border border-solid border-base-border bg-base-input px-4 py-3 text-base-text focus:border-blue"
              placeholder="Buscar conteúdo"
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}
    </SkeletonTheme>
  );
}
