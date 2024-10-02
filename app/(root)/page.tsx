import Collections from "@/components/Collections";
import AboutUs from "@/components/layout/AboutUs";
import ContactUs from "@/components/layout/ContactUs";
import Separator from "@/components/layout/Separator";
import Video from "@/components/Video";

const HomePage = () => {
  return (
    <div>
      <Video />
      <Separator />
      <Collections />
      <Separator />
      <AboutUs />
      <Separator />
      <ContactUs />
      <Separator />
    </div>
  );
};

export default HomePage;
export const dynamic = "force-dynamic";