import BlogCard from "../components/BlogCard";
import text2 from "../img/text2.jpg";
import text from "../img/text.jpg";
import text1 from "../img/text1.jpg";

const blogPosts = [
  {
    title: "ትምህርት ቤት",
    excerpt: "ትምህርት ቤት || ለምን እንደዘገየን ይገባናል? || ደራሲ ሰላሙ ጫነ ታቦር (ዶ/ር)",
    date: "2024-03-20",
    image: text2,
  },

  {
    title: "በፍቅር ቤት",
    excerpt:
      "በፍቅር ቤት || ፍቅር ሳይሆን የጎዳን እንዴት ማፍቀር እንዳለብን አለማወቃችን ነው የጎዳን || ደራሲ ሰላሙ ጫነ ታቦር (ዶ/ር)",
    date: "2024-03-20",
    image: text1,
  },
  {
    title: "እኛ ቤት",
    excerpt: "እኛ ቤት || የአንዳንድ ቤተሰብ ታሪክ የሀገርም ታሪክ ነው || ደራሲ ሰላሙ ጫነ ታቦር (ዶ/ር)",
    date: "2024-03-01",
    image: text,
  },
];

export default function Blog() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Blog & Textbook
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Here are some textbooks I have worked on and insights, tips, and
            stories from the world of video editing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
