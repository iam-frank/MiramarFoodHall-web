import CountdownTimer from "@/components/ui/CountdownTimer";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-20 relative">
      <div className="relative">
        <div 
          className="h-[70vh] bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
        >
          <div className="absolute inset-0 bg-[#0054AA] bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white leading-tight mb-4">MIRAMAR FOOD HALL</h1>
          <p className="text-xl md:text-2xl font-sans text-white mb-8">San Clemente's Premier Oceanfront Dining Experience</p>
          <div className="bg-white bg-opacity-90 rounded-lg p-6 md:p-8 max-w-xl">
            <p className="text-xl font-montserrat font-semibold text-[#0054AA] mb-4">OPENING SUMMER 2025</p>
            <CountdownTimer />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-[#E8F1F8]">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
