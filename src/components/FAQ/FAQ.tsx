import { useState } from "react";
import { faqData } from "../../constants";

function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    console.log(active);
    setActive(index === active ? null : index);
  };
  return (
    <div className="mx-auto mt-20 mb-28 max-w-2xl py-4">
      <h3 className="pb-8 text-center text-3xl font-bold">
        Frequently Asked Question
      </h3>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 py-4">
          <div
            onClick={() => handleClick(index)}
            className="flex cursor-pointer items-center justify-between py-4 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>
          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
