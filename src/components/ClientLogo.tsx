interface ClientLogoProps {
  name: string;
  logo: string;
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-12 opacity-75 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}