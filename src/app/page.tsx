import { unstable_noStore as noStore } from "next/cache";
import Slider from "./_components/slider";
import FeaturedItems from "./_components/featuredItems";
import Offer from "./_components/offer";

export default function Home() {
  noStore();
  return (
    <main>
      <Slider />
      <FeaturedItems />
      <Offer />
    </main>
  );
}
