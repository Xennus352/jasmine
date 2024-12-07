import Category from "@/components/Category";

export default function Home() {
  return (
    <>
      <header>
        <h2 className="text-center text-xl font-bold underline ">New Feeds</h2>
      </header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mb-20">
        <Category />
      </div>
    </>
  );
}
