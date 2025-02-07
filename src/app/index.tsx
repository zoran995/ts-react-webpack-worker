import React from "react";
import { useEffect, useState } from "react";

const worker = new Worker(new URL("./deep-thought.ts", import.meta.url), {
  type: "module",
});

export const App: React.FC = () => {
  const [answer, setAnswer] = useState<number | null>(null);

  useEffect(() => {
    worker.postMessage({
      question:
        "The Answer to the Ultimate Question of Life, The Universe, and Everything.",
    });
    worker.onmessage = ({ data: { answer } }) => {
      console.log(answer);
      setAnswer(answer);
    };
  }, []);

  return <h1>Hello, world! - {answer}</h1>;
};
