"use client";
import React from "react";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";

export function SignupFormDemo() {
  return (
    <div className="container"
      style={{width:"500px"}}
    >
      <h2 style={{fontSize:"50px", fontWeight:"bold", paddingLeft:"70px"}}>
        Contact Me
      </h2>

      <form className="my-8" style={{paddingTop:"50px" }}>
        <div >
         <div style={{paddingTop:"20px"}}> <LabelInputContainer>
            <Input id="firstname" placeholder="Your Name" type="text" className="w-full"  />
          </LabelInputContainer></div>
         
          <div style={{paddingTop:"20px"}}> <LabelInputContainer>
            <Input id="lastname" placeholder="Your Email" type="text" className="w-full"  />
          </LabelInputContainer></div>
        </div>

        <div style={{paddingTop:"20px"}}> <LabelInputContainer className="mb-5">
          <Input id="email" placeholder="Your Message" type="email" className="w-full" style={{paddingTop:"10px"}} />
        </LabelInputContainer></div>

       <div style={{paddingTop:"20px" , paddingBottom:"100px"}}><button
          className="bg-gradient-to-br from-black to-neutral-600 dark:from-zinc-900 dark:to-zinc-900 
          block w-full text-white rounded-lg h-12 font-medium shadow-lg transition-transform 
          transform hover:scale-105"
          type="submit"
        >
          Send &rarr;
        </button></div> 
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-3 w-full", className)}>
      {children}
    </div>
  );
};
