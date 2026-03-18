"use client";

import { Elements } from "./ElementDetails";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import * as font from "./font/fonts";
export default function Home() {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [CategoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [displayElements, setDisplayElements] = useState<typeof Elements>([]);

  const filteredElements = useMemo(() => {
    const fil = Elements.filter((el) => {
      return CategoryFilter
        ? el.category.includes(CategoryFilter.toLowerCase())
        : true;
    })
    
    return fil;

  }, [CategoryFilter]);

  useEffect(() => {
    const shuffled = [...filteredElements].sort(() => Math.random() - 0.5);
    const timer = setTimeout(() => {
      setDisplayElements(shuffled);
    }, 0);
    return () => clearTimeout(timer);
  }, [filteredElements]);

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
    <div className="min-h-screen mt-10">
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
            border border-border/40
            bg-background/60
            hover:bg-foreground/10
            transition text-sm
          `}
            >
              <span
                className={
                  filterOpen ? "text-foreground/80" : "text-foreground/60"
                }
              >
                <span className="text-foreground/90 font-bold mr-3">
                  Category:
                </span>{" "}
                {CategoryFilter ? CategoryFilter : "All"}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""}`}
              />
            </button>

            {filterOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-background/90 rounded-xl shadow-md  z-99">
                <ul className="py-1 text-sm text-foreground text-center p-1">
                  <li
                    className="px-4 py-2 hover:bg-foreground/10 cursor-pointer transition"
                    onClick={() => {
                      setCategoryFilter(null);
                      setFilterOpen(false);
                    }}
                  >
                    All
                  </li>

                  <li
                    className="px-4 py-2 hover:bg-foreground/10 cursor-pointer transition"
                    onClick={() => {
                      setCategoryFilter("Button");
                      setFilterOpen(false);
                    }}
                  >
                    Button
                  </li>

                  <li
                    className="px-4 py-2 hover:bg-foreground/10 cursor-pointer transition"
                    onClick={() => {
                      setCategoryFilter("Input");
                      setFilterOpen(false);
                    }}
                  >
                    Input
                  </li>

                  <li
                    className="px-4 py-2 hover:bg-foreground/10 cursor-pointer transition"
                    onClick={() => {
                      setCategoryFilter("Card");
                      setFilterOpen(false);
                    }}
                  >
                    Card
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ELEMENT CARDS CONTAINER */}
        <div className="w-7xl flex  justify-center place-items-center">
          <div className=" gap-8 grid grid-cols-3 auto-cols-auto items-center justify-between justify-items-start">
            {(displayElements.length > 0 ? displayElements : filteredElements).map((Element, index) => {
              const El = Element.component;
              return (
                <div key={index} className="">
                  <div
                    className={`bg-foreground/6 rounded-xl p-2 text-background ${font.inconsolata.className} relative w-[20rem] h-80 flex items-center justify-center`}
                  >
                    <div>
                      <El />
                    </div>

                    <button
                      className="bg-foreground/90 p-2 rounded-md text-center right-3 bottom-3 absolute cursor-pointer hover:bg-foreground/80"
                      onClick={() => {
                        window.location.href = `/ViewElement/${Element.id.toString().replace(/\s+/g, "-")}`;
                      }}
                    >
                      Get code
                    </button>
                  </div>
                  <div
                    className={`${font.josefin.className} flex items-center text-center justify-center pl-2 pr-2 pt-3`}
                  >
                    <span>{Element.name}</span>
                    <span></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
