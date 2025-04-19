const InstagramFeed = () => {
  // These would typically come from an Instagram API integration
  const instagramPosts = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80", alt: "Food Image" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", alt: "Patio View" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1623259838743-9f1e884fba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80", alt: "San Clemente Coastline" },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", alt: "Happy Customers" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", alt: "Beach Scene" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1563897539633-7374c276c212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80", alt: "Coastal View" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-4">Instagram Feed</h3>
      <div className="grid grid-cols-3 gap-2">
        {instagramPosts.map(post => (
          <div key={post.id} className="instagram-item aspect-square">
            <img 
              src={post.imageUrl} 
              alt={post.alt} 
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-[#0094D4] font-semibold hover:text-[#0677BA]">
          Follow us on Instagram
        </a>
      </div>

      <style jsx>{`
        .instagram-item:hover img {
          opacity: 0.9;
          transform: scale(1.03);
        }
        .instagram-item img {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default InstagramFeed;
