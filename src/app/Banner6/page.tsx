import Image from "next/image";

const steps = [
  {
    title: "Report Research and Concept Layout",
    description:
      "We start with extensive research and drafting according to your provided information before we finally start writing down the very first chapter.",
  },
  {
    title: "Repetitive Updates For Book writing",
    description:
      "Although our team of ghostwriters will update you throughout—you can preview each chapter after it's done.",
  },
  {
    title: "Covering a Spectrum Of Publishing Needs",
    description:
      "No matter how imperfect you think your scripts are, we will make them spotless so that you won’t stop generating great ideas.",
  },
  {
    title: "Artistic Book Formatting",
    description:
      "We don’t only have great writers but artisans as well; a well-written book needs a well-structured format, fonts, and cover design.",
  },
  {
    title: "Renowned Book Publishing",
    description:
      "And then comes the most exciting part, book publishing! Since you have already trusted us in presenting your thoughts to the audience, we will take care of every aspect from scratch.",
  },
];

// Helper to format the title with clickable words
const formatTitle = (title: string) => {
  const highlightWords = ["Format", "Publishing"];
  return title.split(" ").map((word, idx) => {
    const cleanWord = word.replace(/[^\w]/g, ""); // remove punctuation
    if (highlightWords.includes(cleanWord)) {
      return (
        <span
          key={`title-${idx}`}
          className="text-blue-600 underline cursor-pointer"
        >
          {word + " "}
        </span>
      );
    }
    return word + " ";
  });
};

// Helper to format the description with clickable words
const formatDescription = (desc: string) => {
  const highlightWords = ["ghostwriters", "format", "cover", "publishing"];
  return desc.split(" ").map((word, idx) => {
    const cleanWord = word.replace(/[^\w]/g, "").toLowerCase();
    if (highlightWords.includes(cleanWord)) {
      return (
        <span
          key={`desc-${idx}`}
          className="text-blue-600 underline cursor-pointer"
        >
          {word + " "}
        </span>
      );
    }
    return word + " ";
  });
};

export default function ProcessSteps() {
  return (
    <section className="relative py-20 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="flex justify-center w-full max-w-[700px] mx-auto">
  <Image
    src="/Assets-12.png"
    alt="Book Writing Process"
    width={900}
    height={800}
    className="object-contain w-full h-auto"
    priority
  />
</div>

        {/* className="w-20 h-20 rounded-full text-white flex items-center justify-center font-bold shadow-lg text-center text-xs px-2 */}
        {/* Right Content */}
        <div className="flex flex-col gap-10">
          {steps.map((step, index) => (
            <div key={`step-${index}`} className="flex items-start gap-6">
              {/* Step Badge */}
              <div
                className="w-20 h-20 rounded-full text-white flex flex-col items-center justify-center font-bold shadow-lg text-xs px-6"
                style={{
                  backgroundColor: index % 2 === 0 ? "#E67E22" : "#10212D",
                }}
              >
                <span className="text-[11px] tracking-wider">STEP</span>
                <span className="text-xl">{`0${index + 1}`}</span>
              </div>

              {/* Step Text */}
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {formatTitle(step.title)}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {formatDescription(step.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
