export default function FadedButton({ text, link }) {
  return (
    <a
      className="text-white font-bold text-nowrap px-20 py-6 bg-gradient-to-r from-indigo-500 to-pink-500 h-10 w-[100px] bg-white rounded shadow-xl hover:scale-110 duration-150 flex items-center justify-center"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
}
