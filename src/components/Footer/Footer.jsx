import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
            © {new Date().getFullYear()} Ray Sun. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/raysun93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
