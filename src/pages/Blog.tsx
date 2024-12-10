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

  {
    title: "The Art of Editing Drama Series",
    excerpt:
      "How precision editing on projects like 'Ashara' enhances storytelling and audience engagement.",
    date: "2024-03-10",

    image: "https://via.placeholder.com/800x400.png?text=Drama+Editing",
  },
  {
    title: "Enhancing Social Media Content Through Editing",
    excerpt:
      "Proven tips for creating visually stunning and engaging videos that captivate social media audiences.",
    date: "2024-03-05",

    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Balancing Creativity and Deadlines in Video Production",
    excerpt:
      "Lessons from working on tight schedules in productions like Keza Afriqa and Energy Film Production.",
    date: "2024-03-01",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Blog & Textbook
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some textbooks i have worked on and Insights, tips, and
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
