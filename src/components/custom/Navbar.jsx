import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto h-16 max-w-7xl px-6">
        <div className="relative flex h-full items-center">
          {/* Left - Brand */}
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-lg font-semibold text-gray-900">Signbridge</span>
          </div>

          {/* Center - Navigation Links */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Login & Avatar */}
          <div className="ml-auto flex items-center gap-3">
            <Button variant="cBridge" size="sm" className={"font-semibold"}>
              Login
            </Button>
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
