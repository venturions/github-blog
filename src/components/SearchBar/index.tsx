export function SearchBar() {
  return (
    <div className="max-sm:mx-4">
      <div className="mt-20 flex justify-between">
        <h1 className="text-lg font-bold leading-normal text-base-subtitle">
          Publicações
        </h1>
        <span className="text-right text-sm leading-normal text-base-span">
          6 publicações
        </span>
      </div>
      <div className="mt-3">
        <input
          className="flex w-full flex-row items-center gap-2 rounded-md border border-solid border-base-border bg-base-input px-4 py-3 text-base-text focus:border-blue"
          placeholder="Buscar conteúdo"
        />
      </div>
    </div>
  );
}
