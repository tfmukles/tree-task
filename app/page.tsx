"use client";

import data from "./data.json";

export default function Home() {
  return (
    <main className="bg-[#FBFDFF] py-10 flex items-center flex-col">
      <TreeStart trees={data}/>
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
    <ul className={className || '' + ' w-full'}>
      {trees.map((tree, index) => {
        if (tree.curve) {
          return (
            <li className="tree-node sub-tree" key={index}>
              <div className={(index / 2 === 0) ? 'left-sub-node' : 'right-sub-node'}>
                <div className={`curve-line pb-0`}></div>
                <div className={`tree-button p-2 max-w-max min-w-max inline-block text-xs`}>
                  {tree.title}
                </div>
              </div>
              <div className={`${(index / 2 === 0) ? 'left-plus-icon' : 'right-plus-icon'}`}>
                {(index / 2 === 0) && <svg className="child-curve-line" viewBox="0 0 94 117" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 116.25C1.00005 104.525 3.9545 86.1846 27 70.25" stroke="#740000"/>
                    <line x1="70.1233" y1="38.163" x2="26.4736" y2="70.6393" stroke="#740000"/>
                    <path d="M69 39C76.6667 33 92.3 17 93.5 1" stroke="#740000"/>
                </svg>}
                {(index / 2 !== 0) && <svg className="child-curve-line" viewBox="0 0 95 120" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                    <path d="M93.93 119.9C93.9299 107.144 91.4755 87.7355 68.43 70.4" stroke="#740000"/>
                    <path d="M26 39L68.4928 70.4459" stroke="#740000"/>
                    <path d="M26 39C18.3333 33 2.2 17 1 1" stroke="#740000"/>
                </svg>}


                <button className="expand-button">+</button>
              </div>
              {tree.child && <TreeStart trees={tree.child}/>}
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
                className="flex justify-center gap-x-16"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
