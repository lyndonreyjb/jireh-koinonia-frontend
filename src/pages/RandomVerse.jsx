import { useEffect, useState } from "react";
const RandomVerse = () => {
  const verses = [
    {
      id: 1,
      text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    },
    {
      id: 2,
      text: "Trust in the LORD with all your heart, and do not lean on your own understanding.",
    },
    { id: 3, text: "The LORD is my shepherd; I shall not want." },
    // Add more verses as needed
  ];

  const [selectedVerse, setSelectedVerse] = useState(null);

  useEffect(() => {
    generateRandomVerse();
  }, []);

  const generateRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    setSelectedVerse(verses[randomIndex]);
  };

  return (
    <div className="w-5/6">
      {selectedVerse && (
        <div>
          <p className="text-2xl font-bold text-slate-100">
            {selectedVerse.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomVerse;
