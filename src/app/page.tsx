
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Contents from "@/components/Contents";
import Background from "@/components/Background";

export default function Home() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Background />
      <Container>
        <Navbar />
        <Contents />
      </Container>
    </div>
  );
}
