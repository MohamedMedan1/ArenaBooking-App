export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lienar-to-br from-[#10B981] to-[#1E3A8A] rounded-full p-2">
                {/* <Trophy className="w-6 h-6 text-white" /> */}
              </div>
              <span className="text-xl font-bold">Arena Match</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted platform for booking premium sports venues
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                {/* <Facebook className="w-5 h-5" /> */}
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                {/* <Twitter className="w-5 h-5" /> */}
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                {/* <Instagram className="w-5 h-5" /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {/* <li><button onClick={() => navigate('/web')} className="hover:text-white transition-colors">Home</button></li> */}
              {/* <li><button onClick={() => navigate('/web/fields')} className="hover:text-white transition-colors">Browse Fields</button></li> */}
              {/* <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li> */}
              {/* <li><button onClick={() => navigate('/login')} className="hover:text-white transition-colors">Sign In</button></li> */}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="font-bold mb-4">Sports</h3>
            <ul className="space-y-2 text-gray-400">
              {/* {categories.slice(0, 4).map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => navigate(`/web/fields?category=${cat.name}`)}
                      className="hover:text-white transition-colors"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))} */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                {/* <MapPin className="w-5 h-5 flex-shrink-0" /> */}
                <span>Tanta, Egypt</span>
              </li>
              <li className="flex items-center gap-2">
                {/* <Phone className="w-5 h-5 flex-shrink-0" /> */}
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                {/* <Mail className="w-5 h-5 flex-shrink-0" /> */}
                <span>info@arenamatch.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Arena Match. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
