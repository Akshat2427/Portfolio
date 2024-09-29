


"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../utils/util";

export const Spotlight = ({
  text,
  className
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    function generateRandomString(targetLength) {
      const template = "My name is Akshat.I am a Developer.";
      let str = "";
    
      while (str.length < targetLength) {
        str += template;
      }
    
      return str.substring(0, targetLength);
    }
    
    const randomString = generateRandomString(15000);
    console.log(randomString);
    setRandomString(randomString);
    
  }, []);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // const str = generateRandomString(10000);
    // setRandomString(str);
  }

  return (
    (<div
      className={cn(
        "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full absolute",
        className
      )}>
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString}  />
        <div className="relative z-10 flex items-center justify-center">
          <div
           >
            <div
              className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>)
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString
}) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    (<div className="pointer-events-none">
      <div
        className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style} />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}>
        <p
          className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>)
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>)
  );
};

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
//  import { cn } from "../../utils/util";

// export function LampDemo() {
//   return (
//     (<LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
//         Build lamps <br /> the right way
//       </motion.h1>
//     </LampContainer>)
//   );
// }

// export const Spotlight = ({
//   children,
//   className
// }) => {
//   return (
//     (<div
//       className={cn(
//         "absolute flex min-h-screen flex-col items-center justify-center overflow-hidden  w-full rounded-md z-0",
//         className
//       )}>
//       <div
//         className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
//         <motion.div
//           initial={{ opacity: 0.5, width: "15rem" }}
//           whileInView={{ opacity: 1, width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           style={{
//             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//           }}
//           className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
//           <div
//             className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//           <div
//             className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0.5, width: "15rem" }}
//           whileInView={{ opacity: 1, width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           style={{
//             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//           }}
//           className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
//           <div
//             className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
//           <div
//             className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//         </motion.div>
//         <div
//           className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
//         <div
//           className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
//         <div
//           className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
//         <motion.div
//           initial={{ width: "8rem" }}
//           whileInView={{ width: "16rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></motion.div>
//         <motion.div
//           initial={{ width: "15rem" }}
//           whileInView={{ width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "></motion.div>

//         <div
//           className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
//       </div>
//       <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
//         {children}
//       </div>
//     </div>)
//   );
// };

// // "use client";
// // import { cn } from "../../utils/util";
// // import { motion, AnimatePresence } from "framer-motion";
// // import React, { useRef, useState, useEffect } from "react";

// // export const Spotlight = ({
// //   children,
// //   className
// // }) => {
// //   const containerRef = useRef(null);
// //   const parentRef = useRef(null);

// //   const beams = [
// //     {
// //       initialX: 10,
// //       translateX: 10,
// //       duration: 7,
// //       repeatDelay: 3,
// //       delay: 2,
// //     },
// //     {
// //       initialX: 600,
// //       translateX: 600,
// //       duration: 3,
// //       repeatDelay: 3,
// //       delay: 4,
// //     },
// //     {
// //       initialX: 100,
// //       translateX: 100,
// //       duration: 7,
// //       repeatDelay: 7,
// //       className: "h-6",
// //     },
// //     {
// //       initialX: 400,
// //       translateX: 400,
// //       duration: 5,
// //       repeatDelay: 14,
// //       delay: 4,
// //     },
// //     {
// //       initialX: 800,
// //       translateX: 800,
// //       duration: 11,
// //       repeatDelay: 2,
// //       className: "h-20",
// //     },
// //     {
// //       initialX: 1000,
// //       translateX: 1000,
// //       duration: 4,
// //       repeatDelay: 2,
// //       className: "h-12",
// //     },
// //     {
// //       initialX: 1200,
// //       translateX: 1200,
// //       duration: 6,
// //       repeatDelay: 4,
// //       delay: 2,
// //       className: "h-6",
// //     },
// //   ];

// //   return (
// //     (<div
// //       ref={parentRef}
// //       className={cn(
// //         "h-screen  flex items-center w-full justify-center overflow-hidden absolute",
// //         // h-screen if you want bigger
// //         className
// //       )}>
// //       {beams.map((beam) => (
// //         <CollisionMechanism
// //           key={beam.initialX + "beam-idx"}
// //           beamOptions={beam}
// //           containerRef={containerRef}
// //           parentRef={parentRef} />
// //       ))}
// //       {children}
// //       <div
// //         ref={containerRef}
// //         className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
// //         style={{
// //           boxShadow:
// //             "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
// //         }}></div>
// //     </div>)
// //   );
// // };

// // const CollisionMechanism = React.forwardRef(({ parentRef, containerRef, beamOptions = {} }, ref) => {
// //   const beamRef = useRef(null);
// //   const [collision, setCollision] = useState({
// //     detected: false,
// //     coordinates: null,
// //   });
// //   const [beamKey, setBeamKey] = useState(0);
// //   const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

// //   useEffect(() => {
// //     const checkCollision = () => {
// //       if (
// //         beamRef.current &&
// //         containerRef.current &&
// //         parentRef.current &&
// //         !cycleCollisionDetected
// //       ) {
// //         const beamRect = beamRef.current.getBoundingClientRect();
// //         const containerRect = containerRef.current.getBoundingClientRect();
// //         const parentRect = parentRef.current.getBoundingClientRect();

// //         if (beamRect.bottom >= containerRect.top) {
// //           const relativeX =
// //             beamRect.left - parentRect.left + beamRect.width / 2;
// //           const relativeY = beamRect.bottom - parentRect.top;

// //           setCollision({
// //             detected: true,
// //             coordinates: {
// //               x: relativeX,
// //               y: relativeY,
// //             },
// //           });
// //           setCycleCollisionDetected(true);
// //         }
// //       }
// //     };

// //     const animationInterval = setInterval(checkCollision, 50);

// //     return () => clearInterval(animationInterval);
// //   }, [cycleCollisionDetected, containerRef]);

// //   useEffect(() => {
// //     if (collision.detected && collision.coordinates) {
// //       setTimeout(() => {
// //         setCollision({ detected: false, coordinates: null });
// //         setCycleCollisionDetected(false);
// //       }, 2000);

// //       setTimeout(() => {
// //         setBeamKey((prevKey) => prevKey + 1);
// //       }, 2000);
// //     }
// //   }, [collision]);

// //   return (<>
// //     <motion.div
// //       key={beamKey}
// //       ref={beamRef}
// //       animate="animate"
// //       initial={{
// //         translateY: beamOptions.initialY || "-200px",
// //         translateX: beamOptions.initialX || "0px",
// //         rotate: beamOptions.rotate || 0,
// //       }}
// //       variants={{
// //         animate: {
// //           translateY: beamOptions.translateY || "1800px",
// //           translateX: beamOptions.translateX || "0px",
// //           rotate: beamOptions.rotate || 0,
// //         },
// //       }}
// //       transition={{
// //         duration: beamOptions.duration || 8,
// //         repeat: Infinity,
// //         repeatType: "loop",
// //         ease: "linear",
// //         delay: beamOptions.delay || 0,
// //         repeatDelay: beamOptions.repeatDelay || 0,
// //       }}
// //       className={cn(
// //         "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
// //         beamOptions.className
// //       )} />
// //     <AnimatePresence>
// //       {collision.detected && collision.coordinates && (
// //         <Explosion
// //           key={`${collision.coordinates.x}-${collision.coordinates.y}`}
// //           className=""
// //           style={{
// //             left: `${collision.coordinates.x}px`,
// //             top: `${collision.coordinates.y}px`,
// //             transform: "translate(-50%, -50%)",
// //           }} />
// //       )}
// //     </AnimatePresence>
// //   </>);
// // });

// // CollisionMechanism.displayName = "CollisionMechanism";

// // const Explosion = ({
// //   ...props
// // }) => {
// //   const spans = Array.from({ length: 20 }, (_, index) => ({
// //     id: index,
// //     initialX: 0,
// //     initialY: 0,
// //     directionX: Math.floor(Math.random() * 80 - 40),
// //     directionY: Math.floor(Math.random() * -50 - 10),
// //   }));

// //   return (
// //     (<div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         exit={{ opacity: 0 }}
// //         transition={{ duration: 1.5, ease: "easeOut" }}
// //         className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"></motion.div>
// //       {spans.map((span) => (
// //         <motion.span
// //           key={span.id}
// //           initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
// //           animate={{
// //             x: span.directionX,
// //             y: span.directionY,
// //             opacity: 0,
// //           }}
// //           transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
// //           className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
// //       ))}
// //     </div>)
// //   );
// // };


// // //  const Spotlight1 = ({ className, fill }) => {
// // //   return (
// // //       <svg
// // //         className={cn(
// // //           "animate-spotlight pointer-events-none absolute left-[27%] top-[-10%] z-[1] h-[169%] w-[38%] lg:w-[84%] opacity-0",
// // //           className
// // //         )}
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         viewBox="0 0 3787 2842"
// // //         fill="none"
// // //       >
// // //         <g filter="url(#filter)">
// // //           <ellipse
// // //             cx="1924.71"
// // //             cy="273.501"
// // //             rx="1924.71"
// // //             ry="273.501"
// // //             transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
// // //             fill={fill || "white"}
// // //             fillOpacity="0.21"
// // //           ></ellipse>
// // //         </g>
// // //         <defs>
// // //           <filter
// // //             id="filter"
// // //             x="0.860352"
// // //             y="0.838989"
// // //             width="3785.16"
// // //             height="2840.26"
// // //             filterUnits="userSpaceOnUse"
// // //             colorInterpolationFilters="sRGB"
// // //           >
// // //             <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
// // //             <feBlend
// // //               mode="normal"
// // //               in="SourceGraphic"
// // //               in2="BackgroundImageFix"
// // //               result="shape"
// // //             ></feBlend>
// // //             <feGaussianBlur
// // //               stdDeviation="151"
// // //               result="effect1_foregroundBlur_1065_8"
// // //             ></feGaussianBlur>
// // //           </filter>
// // //         </defs>
// // //       </svg>
   
// // //   );
// // // };
