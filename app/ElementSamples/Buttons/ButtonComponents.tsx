'use client';
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import * as font from '@/app/font/fonts'

type ButtonOneProps = {
  Text? : string ,
  onclick?: ()=> void ,
}

export function ButtonOne( { Text = 'Text', onclick } : ButtonOneProps ) {
  return (
    <button className="relative inline-block px-7.5 py-3.75 uppercase font-semibold text-[20px] no-underline group overflow-hidden select-none text-foreground cursor-pointer" onClick={onclick} >
      <span className="relative z-10" >{Text}</span>

      {/* TOP LEFT */}
      <span className="absolute top-0 left-0 h-0.5 w-[10%] bg-foreground origin-left
        transition-all duration-300 ease-in-out group-hover:w-[30%] "></span>



      {/* TOP RIGHT */}
      <span className="absolute top-0 right-0 h-0.5 w-[10%] bg-foreground origin-right
        transition-all duration-300 ease-in-out group-hover:w-[30%]"></span>

      {/* BOTTOM LEFT */}
      <span className="absolute bottom-0 left-0 h-0.5 w-[10%] bg-foreground origin-left
        transition-all duration-300 ease-in-out group-hover:w-[30%]"></span>

      {/* BOTTOM RIGHT */}
      <span className="absolute bottom-0 right-0 h-0.5 w-[10%] bg-foreground origin-right
        transition-all duration-300 ease-in-out group-hover:w-[30%]"></span>

      {/* LEFT TOP */}
      <span className="absolute top-0 left-0 w-0.5 h-[10%] bg-foreground origin-top
        transition-all duration-300 ease-in-out group-hover:h-[30%]"></span>

      {/* LEFT BOTTOM */}
      <span className="absolute bottom-0 left-0 w-0.5 h-[10%] bg-foreground origin-bottom
        transition-all duration-300 ease-in-out group-hover:h-[30%]"></span>

      {/* RIGHT TOP */}
      <span className="absolute top-0 right-0 w-0.5 h-[10%] bg-foreground origin-top
        transition-all duration-300 ease-in-out group-hover:h-[30%]"></span>

      {/* RIGHT BOTTOM */}
      <span className="absolute bottom-0 right-0 w-0.5 h-[10%] bg-foreground origin-bottom
        transition-all duration-300 ease-in-out group-hover:h-[30%]"></span>
    </button>
  );
}

type ButtonTwoProps = {
  Text? : string ,
  onclick?: ()=> void ,
}

export function ButtonTwo( { Text = 'Hover Me', onclick } : ButtonTwoProps ) {
  return (
    <button className="relative px-6 py-3 bg-transparent border-2 border-foreground text-foreground font-semibold rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:text-background" onClick={onclick}>
      <span className="relative z-10">{Text}</span>
      <div className="absolute inset-0 bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
    </button>
  );
}

type ButtonThreeProps = {
  Text? : string ,
  onclick?: ()=> void ,
}

export function ButtonThree( { Text = 'Click Me', onclick } : ButtonThreeProps ) {
  return (
    <button className="relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer" onClick={onclick}>
      {Text}
    </button>
  );
}



type ComponentTypes = {
  title?: string;
  options?: string[];
};

export function ButtonFour({ title = 'Drop Down', options = ['Option one', 'Option two'] }: ComponentTypes) {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      <div
        className={`
        ${font.ubuntu.className} mb-14 flex flex-wrap gap-4 rounded-2xl p-2
        overflow-visible z-99
      `}
      >
        <div ref={containerRef} className="relative ">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={`
            ${font.nunito.className}
            flex items-center gap-2
            px-4 py-2 rounded-lg
            border border-[hsla(240_5.9%_47%/0.4)] dark:border-[hsla(240_3.7%_20.9%/0.4)]
            bg-[hsla(0_0%_100%/0.6)] dark:bg-[hsla(240_10%_3%/0.6)]
            hover:bg-[hsla(240_10%_3.9%/0.1)] dark:hover:bg-[hsla(0_0%_98%/0.1)]
            transition text-sm
          `}
          >
            <span
              className={
                filterOpen
                  ? "text-[hsla(240_10%_3.9%/0.8)] dark:text-[hsla(0_0%_98%/0.8)]"
                  : "text-[hsla(240_10%_3.9%/0.6)] dark:text-[hsla(0_0%_98%/0.6)]"
              }
            >
              <span className="text-[hsla(240_10%_3.9%/0.9)] dark:text-[hsla(0_0%_98%/0.9)] font-bold mr-3">
                DropDown
              </span>
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""} text-[hsla(240_10%_3.9%/0.8)] dark:text-[hsla(0_0%_98%/0.8)]`}
            />
          </button>

          {filterOpen && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-[hsla(0_0%_100%/0.9)] dark:bg-[hsla(240_10%_3%/0.9)] rounded-xl shadow-md  z-99">
              <ul className="py-1 text-sm text-[hsla(240_10%_3.9%/1)] dark:text-[hsla(0_0%_98%/1)] text-center p-1">
                {options.map((opt, i) => {
                  return (
                    <li
                      className="px-4 py-2 hover:bg-[hsla(240_10%_3.9%/0.1)] dark:hover:bg-[hsla(0_0%_98%/0.1)] cursor-pointer transition"
                      onClick={() => {
                        setFilterOpen(false);
                      }}
                      key={i}
                    >
                      {opt}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
