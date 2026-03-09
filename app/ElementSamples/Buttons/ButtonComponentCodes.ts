// CODE NAMES MUST START WITH 'code_ID' AND THE ID FOR WHICH THE CODE IS FOR SHOULD ALSO BE ADDED AFTER THE '...ID[COMPONENT ID]'

export const code_ID1 = 
`
'use client';

type ButtonOneProps = {
  Text? : string ,
  onclick?: ()=> void ,
}

export function ButtonOne( { Text = 'Text', onclick } : ButtonOneProps ) {
  return (
    <button className="relative inline-block px-7.5 py-3.75 uppercase font-semibold text-[20px] no-underline group overflow-hidden select-none text-foreground" onClick={onclick} >
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
`

export const code_ID2 =
`
'use client';

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
`

export const code_ID3 =
`
'use client';

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
`

