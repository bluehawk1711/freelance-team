"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/common";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { toggleMobileMenu, closeMobileMenu } from "@/redux/slices/navigationSlice";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const dispatch = useAppDispatch();
  const { items: navItems, mobileMenuOpen } = useAppSelector(
    (state) => state.navigation
  );
  const { companyName } = useAppSelector((state) => state.site);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null && itemRefs.current[hoveredIndex] && navRef.current) {
      const item = itemRefs.current[hoveredIndex];
      const container = navRef.current;
      const itemRect = item!.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setLineStyle({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        opacity: 1,
      });
    } else {
      setLineStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex]);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background"
        }`}
      >
        <Container size="xl">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl sm:text-2xl text-foreground">
              {companyName}
            </Link>

            {/* Desktop Navigation with hover line */}
            <div className="hidden md:flex items-center">
              <div
                ref={navRef}
                className="relative flex items-center gap-8"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated underline */}
                <div
                  className="absolute bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out"
                  style={{
                    left: `${lineStyle.left}px`,
                    width: `${lineStyle.width}px`,
                    opacity: lineStyle.opacity,
                  }}
                />

                {navItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    ref={(el) => { itemRefs.current[index] = el; }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className="relative py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Button size="sm" variant="gradient" className="rounded-full px-5">
                Get Started
              </Button>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => dispatch(toggleMobileMenu())}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-md md:hidden">
          <Container size="xl" className="py-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="px-4 py-2 text-base font-medium rounded-lg hover:bg-muted transition-colors"
                  onClick={() => dispatch(closeMobileMenu())}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-4 rounded-full" variant="gradient">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
