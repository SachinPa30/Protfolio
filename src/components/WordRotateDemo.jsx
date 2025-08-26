import WordRotate from "./ui/WordRotate";

export function WordRotateDemo() {
  return (
    <div className="text-center mt-10">
      <WordRotate
        words={["React Developer", "नमस्ते"]}
        className="text-3xl font-bold text-blue-600"
      />
    </div>
  );
}
