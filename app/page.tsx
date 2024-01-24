import data from "./data.json";

export default function Home() {
  return (
    <main className="bg-[#FBFDFF] flex items-center flex-col">
      <TreeStart trees={data} />
      {/* {data.map((item) => (
        <React.Fragment>
          <button className="border-[#E0E0E0] border px-4 py-5  block min-w-[300px] font-semibold rounded-2xl relative after:absolute after:w-0.5 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2">
            {item.title}{" "}
          </button>
          <div className="relative after:top-0 after:left-1/2 after:-translate-x-1/2 after:absolute after:w-0.5 after:h-full after:bg-red-600 py-10 ">
            <button className="border-[#E0E0E0] bg-white border text-xl p-3 rounded-lg relative z-10">
              +
            </button>
          </div>
          {item.child?.map((child) => {
            return (
              <React.Fragment>
                <button className="border-[#E0E0E0] bg-white border text-xl p-3 rounded-lg relative z-10">
                  {child.title}
                </button>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      ))} */}
    </main>
  );
}

type Tree = {
  title: string;
  curve?: boolean;
  child?: Tree[];
};

function TreeStart({ trees }: { trees: Tree[] }) {
  return (
    <div className="flex flex-col">
      {trees.map((tree, i) => {
        if (tree.curve) {
          return (
            <div className="text-center">
              <button className="border-[#E0E0E0] bg-white border text-xl p-3 rounded-lg relative z-10">
                {tree.title}
              </button>
              <div className="relative after:top-0 after:left-1/2 after:-translate-x-1/2 after:absolute after:w-0.5 after:h-full after:bg-red-600 py-3">
                <button className="border-[#E0E0E0] bg-white border text-xl p-3 rounded-lg relative z-10">
                  +
                </button>
              </div>
              {tree.child && <TreeStart trees={tree.child} />}
            </div>
          );
        }
        return (
          <div className="text-center">
            <button className="border-[#E0E0E0] bg-white border text-xl p-3 rounded-lg relative z-10">
              {tree.title}
            </button>
            {trees.length - 1 !== i && !tree.child && (
              <div className="relative after:top-0 after:left-1/2 after:-translate-x-1/2 after:absolute after:w-0.5 after:h-full after:bg-red-600 py-10 ">
                <button className="border-[#E0E0E0] bg-white border text-xl p-2 rounded-lg relative z-10">
                  +
                </button>
              </div>
            )}

            {tree.child && <TreeStart trees={tree.child} />}
          </div>
        );
      })}
    </div>
  );
}
