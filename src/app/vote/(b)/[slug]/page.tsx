import { isValidSlug } from "@/app/components/Neon/actions";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const slug = (await params).slug;
  // const validSlug = await isValidSlug(slug);

  // if (validSlug) {
  // } else {
  //   notFound();
  // }

  return (
    <>
      <main className=" mx-auto flex flex-col gap-4 mb-12 max-w-[500px] bg-pink-950 px-4">
        <div className="aspect-square w-full bg-pink-300"></div>

        {/* startup info */}
        <div>
          <h2 className="font-sans uppercase font-bold text-[40px] text-center">AI DOL</h2>
          <div className="flex gap-4 text-center justify-center">
            <span>Posts: 12</span>
            <span>Investors: 25,854</span>
          </div>
        </div>

        {/* vote button */}
        <button className="bg-amber-100 text-black rounded-md py-3 cursor-pointer">Vote for AIDOL</button>

        {/* feed and investor buttons */}
        <div className="flex gap-4 ">
          <button className="cursor-pointer">Feed</button>
          <button className="cursor-pointer">Investor Comments</button>
        </div>



      </main>
    </>
  );
}
