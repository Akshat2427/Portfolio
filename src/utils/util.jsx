import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


{/* <motion.div className='flex basis-1/2 mb-8 sm:mt-0 justify-center sm:mr-8'>
<img  src="https://images.unsplash.com/photo-1541777213917-8e6e7149158b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt="Akshat"  className="rounded-full  mt-8 h-80 w-80 md:h-96 md:w-96 object-cover md:mt-0 bg-gradient-to-r from-[#306279] to-[#5791b5] " ></img>
</motion.div> */}