import {
  About,
  Contact,
  Experience,
  Header,
  Hero,
  Navbar,
  Projects,
} from "@/components";

const App = () => {
  return (
    <div id='root' className='grid min-h-screen grid-cols-main'>
      <Navbar />
      <main id='main'>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <div
          style={{
            height: "200px",
            background: "linear-gradient(180deg, #111111, #080808)",
          }}
        />
      </main>
    </div>
  );
};

export default App;
