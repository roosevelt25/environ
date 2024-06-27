// import React from "react";
// import { cn } from "../../lib/utils";
// interface MarqueeProps {
//   className?: string;
//   reverse?: boolean;
//   pauseOnHover?: boolean;
//   children?: React.ReactNode;
//   vertical?: boolean;
//   repeat?: number;
//   [key: string]: any;
// }

// export default function Marquee({
//   className,
//   reverse,
//   pauseOnHover = false,
//   children,
//   3
//   vertical = false,
//   repeat = 4,
//   ...props
// }: MarqueeProps) {
//   return (
//     <div
//       {...props}
//       className={cn(
//         "group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]",
//         {
//           "flex-row": !vertical,
//           "flex-col": vertical,
//         },
//         className,
//       )}
//     >
//       {Array(repeat)
//         .fill(0)
//         .map((_, i) => (
//           <div
//             key={i}
//             className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
//               "animate-marquee flex-row": !vertical,
//               "animate-marquee-vertical flex-col": vertical,
//               "group-hover:[animation-play-state:paused]": pauseOnHover,
//               "[animation-direction:reverse]": reverse,
//             })}
//           >
//             {children}
//           </div>
//         ))}
//     </div>
//   );
// }


import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";

export const Step = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl items-center mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        {/* ... existing code ... */}
      </div>
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex flex-col gap-6" data-aos="fade-up"> 
            <div className="flex items-center">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-[#14240f] "
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div>
                <p className="mb-2 text-lg font-bold">Mission Minimisation</p>
                <p className="text-[#14240f]">
                  Moins de choses, moins de déchets ! Achète malin, choisis
                  durable, finis ton assiette !
                </p>
              </div>
            </div>
            <img 
              className="w-full h-48 object-cover rounded-md"
              src="https://images.pexels.com/photos/1181665/pexels-photo-1181665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Minimisation"
            />
          </div>
          <div className="flex flex-col gap-6" data-aos="fade-up"> 
            <div className="flex items-center">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div>
                <p className="mb-2 text-lg font-bold">Tri Magique</p>
                <p className="text-[#14240f]">
                  Chaque déchet dans sa maison ! Papier, carton, verre, plastique,
                  métal... ne se mélangent pas !
                </p>
              </div>
            </div>
            <img 
              className="w-full h-48 object-cover rounded-md"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Tri Magique"
            />
          </div>
          {/* ... rest of the elements ... */}
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};