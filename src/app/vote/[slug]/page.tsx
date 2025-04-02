import { isValidSlug } from "@/app/components/Neon/actions";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const validSlug = await isValidSlug(slug);

  if (validSlug) {
  } else {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col text-center gap-4 mb-12">
        <h2>I am a page</h2>
      </div>
    </>
  );
}
