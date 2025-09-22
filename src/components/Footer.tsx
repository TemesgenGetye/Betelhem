export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 text-gray-700">
      <div className="max-w-6xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>
            &copy; {new Date().getFullYear()} Betelhem Ashenafi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
