// ==============================================
//  Footer.jsx — Footer Component
// ==============================================
//
//  INSTRUCTIONS:
//
//  1. Build a simple site footer.
//
//  2. Content ideas:
//     - Copyright text: "© 2026 React Task. All rights reserved."
//     - Quick links: Home, Login, Register
//     - Social media icons (optional, can use emoji or icon library)
//
//  3. Tailwind classes to consider:
//     - "bg-gray-800 text-white py-6 px-4" for dark footer style
//     - "text-center" or "flex justify-between" for layout
//     - "text-sm text-gray-400" for muted text
//

function Footer() {
  // TODO: Implement the footer
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div>
        <p>
          "© 2026 React Task. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#">Home</a><p/>
          <a href="#">Login</a><p/>
          <a href="#">Register</a>
        </div>
        <div className="flex gap-4 text-lg">
          <span>🌐</span>
          <span>📘</span>
          <span>🐦</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
