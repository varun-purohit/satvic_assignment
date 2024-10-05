import Background from "../components/Background";
import Layout from "../components/Layout";

interface heroProps {
  headerHeight: number;
}

const Hero = ({ headerHeight }: heroProps) => {
  return (
    <div className="relative" style={{ paddingTop: `${headerHeight}px` }}>
      <Background />
      <div className="absolute top-[80%] md:top-[50%] left-0 w-full h-full">
        <div className="mx-auto px-4 pt-16">
          <Layout />
        </div>
      </div>
    </div>
  );
};

export default Hero;
