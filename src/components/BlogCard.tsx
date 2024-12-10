interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  image,
}: BlogCardProps) {
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all">
      <div className="aspect-video">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 space-x-4">
          <time dateTime={date}>{date}</time>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{excerpt}</p>
        <div className="mt-4"></div>
      </div>
    </article>
  );
}
