import MobileCarousel from "@/app/components/mobileCarousel";
import DesktopTimeline from "@/app/components/desktopTimeline";

export default function Home() {
  return (
    <div>
      <main>
        <MobileCarousel/>
        <DesktopTimeline/>
      </main>
    </div>
  );
}
