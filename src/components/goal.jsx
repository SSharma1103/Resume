import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Goals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div className="text-4xl font-bold mb-25 pb-8 flex flex-col items-center justify-center">
        Goals
      </div>
      <div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
        class = " mr-20 ml-20 mb-50 flex flex-col items-center justify-center"
      >
        <h2>As a MERN stack web developer with a strong interest in finance, I want to merge both fields to create impactful solutions. In the short term, my focus is on deepening my MERN stack expertise, exploring financial APIs like Alpha Vantage or Polygon.io, and building finance-related projects such as a personal finance tracker or stock portfolio manager. I also want to contribute to open-source fintech projects to expand my knowledge. Over the next year, I aim to master financial data visualization using libraries like D3.js, develop a fintech application, and understand financial modeling basics to enhance both my technical and financial skills. Exploring blockchain and DeFi technologies is another area I’m excited about. In the long run, I see myself working on fintech startups, freelancing for financial clients, and developing automation tools for investment analysis or portfolio management. My goal is to become a full-stack fintech engineer while also applying my knowledge to make informed financial decisions—maybe even sharing insights through a finance-focused blog or YouTube channel.</h2>
      </div>
    </div>
  );
}
