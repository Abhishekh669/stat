import { Facebook, Twitter, Linkedin } from "lucide-react";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className="hover:text-white transition-all duration-300 hover:scale-110 transform"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="#"
        className="hover:text-white transition-all duration-300 hover:scale-110 transform"
        aria-label="Follow us on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href="#"
        className="hover:text-white transition-all duration-300 hover:scale-110 transform"
        aria-label="Follow us on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;