import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
}

export default function VideoCard({ title, description, thumbnail, category }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-800">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="rounded-full bg-purple-600 p-4 text-white transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all">
            <Play className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-purple-400">{category}</span>
        <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}