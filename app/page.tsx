import Button01 from "@/components/Buttons/Button01";
import Button02 from "@/components/Buttons/Button02";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative text-center mt-6 mb-[5rem]">
        <h1 className="text-[27vw] leading-[27vw]">Buttons</h1>
        <p className="text-copyGrey w-96 m-auto">
          The following shows a playful array of buttons, each with its own
          charm and animated twist! Explore these fun and stylish examples to
          spice up your web designs.
        </p>
      </section>
      <section className="relative">
        <article className="flex items-center justify-center h-[20rem] gap-24">
          <Button01>Variation 01</Button01>
        </article>
        <article className="flex items-center justify-center h-[20rem] gap-24 flex-wrap">
          <Button02>Variation 02</Button02>
          <Button02 extern>Variation 02 extern</Button02>
          <Button02 bottom>Variation 02 bottom</Button02>
        </article>
      </section>
    </>
  );
}
