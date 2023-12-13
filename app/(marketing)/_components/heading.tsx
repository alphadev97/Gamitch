"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Welcome to <span className="underline">Neotion</span>, where your
        concepts, documents, and strategies come together seamlessly.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Neotion serves as the collaborative workspace where enhanced and
        expedited work takes place.
      </h3>
      <Button>
        Enter Neotion <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
