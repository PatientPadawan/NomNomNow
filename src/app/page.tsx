import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import Slider from "./_components/slider";
import FeaturedItems from "./_components/featuredItems";
import Offer from "./_components/offer";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <main>
      <Slider />
      <FeaturedItems />
      <Offer />
    </main>
  );
}

