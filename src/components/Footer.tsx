import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Truck, Shield, HelpCircle, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#172337] text-gray-300 pt-12 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h4 className="text-white font-medium mb-4">ABOUT</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/stories" className="hover:underline">Flipkart Stories</Link></li>
              <li><Link to="/wholesale" className="hover:underline">Flipkart Wholesale</Link></li>
              <li><Link to="/corporate" className="hover:underline">Corporate Information</Link></li>
            </ul>
          </div>

          {/* Help section */}
          <div>
            <h4 className="text-white font-medium mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/payments" className="hover:underline">Payments</Link></li>
              <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
              <li><Link to="/cancellations" className="hover:underline">Cancellation & Returns</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/report-infringement" className="hover:underline">Report Infringement</Link></li>
            </ul>
          </div>

          {/* Policy section */}
          <div>
            <h4 className="text-white font-medium mb-4">POLICY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/return-policy" className="hover:underline">Return Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms Of Use</Link></li>
              <li><Link to="/security" className="hover:underline">Security</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
              <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
            </ul>
          </div>

          {/* Social section */}
          <div>
            <h4 className="text-white font-medium mb-4">SOCIAL</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Facebook size={18} className="mr-2" />
                <Link to="https://facebook.com" className="hover:underline">Facebook</Link>
              </li>
              <li className="flex items-center">
                <Twitter size={18} className="mr-2" />
                <Link to="https://twitter.com" className="hover:underline">Twitter</Link>
              </li>
              <li className="flex items-center">
                <Instagram size={18} className="mr-2" />
                <Link to="https://instagram.com" className="hover:underline">Instagram</Link>
              </li>
              <li className="flex items-center">
                <Youtube size={18} className="mr-2" />
                <Link to="https://youtube.com" className="hover:underline">YouTube</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          <div className="flex items-center">
            <CreditCard size={20} className="mr-2 text-yellow-400" />
            <span className="text-sm">100% Secure Payments</span>
          </div>
          <div className="flex items-center">
            <Truck size={20} className="mr-2 text-yellow-400" />
            <span className="text-sm">Free Shipping</span>
          </div>
          <div className="flex items-center">
            <HelpCircle size={20} className="mr-2 text-yellow-400" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center">
            <Shield size={20} className="mr-2 text-yellow-400" />
            <span className="text-sm">Buyer Protection</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-center border-t border-gray-700">
          <p className="text-sm">© 2025 Flipkart Clone . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
