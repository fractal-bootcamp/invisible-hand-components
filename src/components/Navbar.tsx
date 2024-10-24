import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigationLinks = [
    { title: "My Store", href: "/" },
    { title: "Selected Products", href: "/about" },
    { title: "Competitors", href: "/products" },
    { title: "Margin Increase", href: "/contact" },
  ];

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mr-8">
          <span className="text-xl font-bold">Invisible Hand</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 flex-1 mr-8">
          {navigationLinks.map((link) => (
            <Button
              key={link.title}
              variant="ghost"
              className="text-sm font-medium transition-colors"
            >
              {link.title}
            </Button>
          ))}
        </div>

        {/* Sign In Button - Desktop */}
        <div className="hidden md:flex gap-4">
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
