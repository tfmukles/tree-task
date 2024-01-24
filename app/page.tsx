"use client";

import data from "./data.json";

export default function Home() {
  return (
    <main className="bg-[#FBFDFF] py-10 flex items-center flex-col">
      <TreeStart trees={data} />
    </main>
  );
}

type Tree = {
  title: string;
  curve?: boolean;
  child?: Tree[];
};

function TreeStart({
  trees,
  className,
}: {
  trees: Tree[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {trees.map((tree, index) => {
        if (tree.curve) {
          return (
            <li className="tree-node" key={index}>
              <div className="curve-line pb-0"></div>
              <div className="tree-button p-2 max-w-max min-w-max text-xs mx-auto">
                {tree.title}
              </div>
              <div className="curve-line">
                <button className="expand-button">+</button>
              </div>
              {tree.child && <TreeStart trees={tree.child} />}
            </li>
          );
        }

        return (
          <li className="tree-node" key={index}>
            <div className="tree-button">{tree.title}</div>
            {trees.length - 1 !== index && !tree.child && (
              <div className="curve-line">
                <button className="expand-button">+</button>
              </div>
            )}

            {tree.child && (
              <TreeStart
                trees={tree.child}
                className="flex justify-between gap-x-4"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
