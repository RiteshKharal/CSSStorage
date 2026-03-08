'use client';

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

