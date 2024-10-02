import AboutUs from "@/components/layout/AboutUs";
import ContactUs from "@/components/layout/ContactUs";
import Separator from "@/components/layout/Separator";

const AboutPage = () => {
  return ( 
  <>
  <AboutUs />
  <Separator />
  <ContactUs />
  <Separator />
  </> 
)
};

export default AboutPage;
export const dynamic = "force-dynamic";
