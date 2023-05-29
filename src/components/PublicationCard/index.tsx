import Link from "next/link";

export function PublicationCard() {
  return (
    <Link href={"/post"}>
      <div className="h-64 w-full rounded-lg border-2 border-transparent bg-base-post p-8 hover:cursor-pointer hover:border-2 hover:border-solid hover:border-base-label">
        <div className="flex justify-between gap-4">
          <h1 className="text-xl font-bold leading-normal text-base-title">
            JavaScript data types and data structures
          </h1>
          <span className="mt-1 min-w-fit text-sm leading-normal text-base-span">
            Há 1 dia
          </span>
        </div>
        <div className="mt-5">
          <p className="line-clamp-4 h-24 overflow-ellipsis text-base leading-normal text-base-text">
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = bar; // foo is now a string foo = true; // foo is now a
            boolean
          </p>
        </div>
      </div>
    </Link>
  );
}
