import roastedChicken from "../assets/roasted_chicken.png";
// type Props = {};

const Recipe = () => {
  return (
    <div className="border border-black">
      <div className="flex justify-end py-2 bg-zinc-300 ">
        <button
          type="button"
          className="mx-12 border-stone-950 border rounded-lg px-2 py-1 bg-white"
        >
          edit
        </button>
        <button
          type="button"
          className="border-stone-950 border rounded-lg px-2 py-1 bg-white mx-4"
        >
          close
        </button>
      </div>
      <img src={roastedChicken} alt="" />
      <h2 className="text-2xl bg-zinc-300">Roasted Chimckin</h2>
      <p className="bg-zinc-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident
        accusantium debitis animi sint expedita sit fuga, iusto modi nulla
        consequuntur aliquid possimus error, sapiente deserunt praesentium,
        officia excepturi veritatis.
      </p>
    </div>
  );
};

export default Recipe;
