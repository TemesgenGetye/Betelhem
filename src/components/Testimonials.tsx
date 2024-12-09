export default function Testimonials() {
  const testimonials = [
    {
      content: "Sarah's attention to detail and storytelling ability transformed our documentary into something truly special. Her work exceeded all expectations.",
      author: "Michael Chen",
      role: "Documentary Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      content: "Working with Sarah was incredible. She has a unique eye for pacing and rhythm that brought our music video to life in ways we never imagined.",
      author: "Emma Rodriguez",
      role: "Music Artist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      content: "Sarah's expertise in color grading and motion graphics added that extra layer of polish our brand campaign needed. True professional!",
      author: "David Park",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];

  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What Clients Say</h2>
          <p className="mt-4 text-lg text-gray-400">Don't just take my word for it</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-gray-800 p-8 rounded-lg relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-16 w-16 rounded-full border-4 border-gray-800"
                />
              </div>
              <div className="pt-8">
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}