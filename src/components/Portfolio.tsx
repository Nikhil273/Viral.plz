const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      src: "https://res.cloudinary.com/nikhilmaurya/video/upload/v1752334434/1024X768_3_ro1bru.mp4",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/nikhilmaurya/video/upload/v1752339218/16_p80aoj.mp4",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/nikhilmaurya/video/upload/v1752339248/1024X768_15_mq8jth.mp4",
    },
  ];
  return (
    <section id="portfolio" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            See how we've helped local businesses achieve viral success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-2 border border-dark-border"
            >
              <div className="aspect-[9/16] bg-dark-card relative overflow-hidden group rounded-md">
                <div className="w-full h-full overflow-hidden">
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
  href="https://drive.google.com/drive/folders/1tbf9-36jQSvPIxvJS878Di7HvzE-JE5s?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-electric-blue hover:bg-electric-blue-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
    View More Work
  </button>
</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
