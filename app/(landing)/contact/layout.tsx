import { LandingFooter } from "@/components/landing-footer";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
    <LandingNavbar />
    <main className="h-full overflow-auto mt-10">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
    <LandingFooter />
    </>
   );
}

export default LandingLayout;
