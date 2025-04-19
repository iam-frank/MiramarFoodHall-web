import { Helmet } from 'react-helmet';
import { Link } from 'wouter';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Miramar Food Hall</title>
        <meta name="description" content="Learn about Miramar Food Hall in San Clemente, CA - a premier oceanfront dining destination featuring 15 food vendors and 2 bars." />
      </Helmet>
      
      <div className="pt-24 md:pt-20 bg-[#E8F1F8]">
        {/* Hero Banner */}
        <div className="relative">
          <div 
            className="h-[40vh] bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
          >
            <div className="absolute inset-0 bg-[#0054AA] bg-opacity-40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white leading-tight">ABOUT MIRAMAR</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-[#E8F1F8]">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Miramar Food Hall was born from a vision to create a gathering place that celebrates the vibrant culinary culture of Southern California. Located on the beautiful San Clemente coastline, we've designed a space where food, community, and ocean views come together in perfect harmony.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our name, "Miramar," means "sea-view" in Spanish, reflecting our stunning oceanfront location and the coastal influence that defines our space and the culinary offerings of our vendors.
            </p>
          </div>
          
          {/* Mission & Values */}
          <div className="bg-white rounded-lg shadow-md p-8 my-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8">
                Miramar Food Hall aims to create a welcoming environment where visitors can explore diverse culinary experiences, support local food entrepreneurs, and enjoy the natural beauty of San Clemente's coastline. We're committed to sustainability, community engagement, and showcasing the best of Southern California's food culture.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div>
                  <div className="w-12 h-12 bg-[#0094D4] flex items-center justify-center rounded-full mb-4">
                    <i className="fas fa-seedling text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-3">Sustainability</h3>
                  <p className="text-gray-700">We prioritize eco-friendly practices, locally-sourced ingredients, and minimal waste throughout our operations.</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-[#00A9DD] flex items-center justify-center rounded-full mb-4">
                    <i className="fas fa-users text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-3">Community</h3>
                  <p className="text-gray-700">We support local entrepreneurs and create a gathering place for residents and visitors to connect and share experiences.</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-[#7BADD7] flex items-center justify-center rounded-full mb-4">
                    <i className="fas fa-utensils text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-3">Culinary Excellence</h3>
                  <p className="text-gray-700">We curate a diverse collection of high-quality food vendors who are passionate about their craft and committed to excellence.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* The Team */}
          <div className="max-w-4xl mx-auto my-16">
            <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6">The Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              Miramar Food Hall is brought to you by a team of passionate culinary enthusiasts, hospitality experts, and local San Clemente residents who are dedicated to creating an exceptional dining destination for our community.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Our leadership team brings together decades of experience in restaurant management, food hall operations, event planning, and coastal California hospitality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {/* Team images would go here in a real implementation */}
              <div className="w-full md:w-80 bg-white p-4 rounded-lg shadow-md">
                <div className="w-full h-64 bg-[#C7EBF8] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-[#0054AA]">Leadership Team Image</p>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-1">Leadership Team</h3>
                <p className="text-gray-700">Our experienced leaders bring a wealth of culinary and hospitality expertise.</p>
              </div>
              
              <div className="w-full md:w-80 bg-white p-4 rounded-lg shadow-md">
                <div className="w-full h-64 bg-[#C7EBF8] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-[#0054AA]">Culinary Team Image</p>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-1">Culinary Team</h3>
                <p className="text-gray-700">Our team of food experts who carefully select and support our vendors.</p>
              </div>
              
              <div className="w-full md:w-80 bg-white p-4 rounded-lg shadow-md">
                <div className="w-full h-64 bg-[#C7EBF8] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-[#0054AA]">Events Team Image</p>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-[#0054AA] mb-1">Events Team</h3>
                <p className="text-gray-700">Creative minds behind our year-round events, tastings, and special experiences.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-[#0054AA] rounded-lg shadow-lg overflow-hidden my-16">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-3xl font-montserrat font-bold text-white mb-4">Join Us Summer 2025</h3>
                <p className="text-white opacity-90 mb-6">
                  We're excited to welcome you to Miramar Food Hall! Whether you're a local resident or visiting San Clemente, we invite you to experience our diverse culinary offerings and beautiful oceanfront setting.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/vendors" 
                    className="inline-block bg-white text-[#0054AA] font-montserrat font-semibold py-3 px-6 rounded-md hover:bg-[#CADEEF] transition-colors"
                  >
                    Meet Our Vendors
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#00A9DD] hover:bg-[#0094D4] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div 
                className="md:w-1/2 h-64 md:h-auto bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1623259838743-9f1e884fba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80')" }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
