import Typewriter from "typewriter-effect";
const TextEffect = () => {
  return (
    <span className="text-blue-500 inline-block">
      <Typewriter
        options={{
          strings: ["microsoft", "intel", "google", "amazon", "netflix", "hp"],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

export default TextEffect;
