"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Button } from "@/components/ui";
import { Menu, X } from "lucide-react";
import { ThemeToggleButton } from "@/components/ui/skiper-ui/skiper26";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  toggleMobileMenu,
  closeMobileMenu,
} from "@/redux/slices/navigationSlice";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = ["services", "portfolio", "about", "process", "contact"];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const dispatch = useAppDispatch();
  const { items: navItems, mobileMenuOpen } = useAppSelector(
    (state) => state.navigation,
  );
  const { companyName } = useAppSelector((state) => state.site);
  const pathname = usePathname();
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        "a[href*='#']",
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex) || window.location.pathname;
      const hash = href.slice(hashIndex + 1);
      if (!hash) return;

      const currentPath = window.location.pathname.replace(/\/$/, "");
      const linkPath = path.replace(/\/$/, "");
      if (linkPath !== currentPath) return;

      event.preventDefault();

      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `${path}#${hash}`);
      }
    };

    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      dispatch(closeMobileMenu());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const activeIndex =
      hoveredIndex !== null
        ? hoveredIndex
        : activeSection
          ? navItems.findIndex((item) => item.href === `/#${activeSection}`)
          : navItems.findIndex((item) => item.href === "/");

    if (activeIndex !== -1 && itemRefs.current[activeIndex] && navRef.current) {
      const item = itemRefs.current[activeIndex];
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
  }, [hoveredIndex, pathname, navItems, activeSection]);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 p-0 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm "
            : "bg-background border-b border-foreground-muted "
        }`}
      >
        <Container size="xl">
          <div
            className={`flex items-center justify-between transition-all duration-300 ease-out ${
              isScrolled ? "h-14 sm:h-16" : "h-12 sm:h-20"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-xl sm:text-2xl text-foreground transition-opacity duration-200 hover:opacity-70"
            >
              <img
                src="/logo.jpeg"
                alt={`${companyName} logo`}
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
              />
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

                {navItems.map((item, index) => {
                  const isActive = activeSection
                    ? item.href === `/#${activeSection}`
                    : item.href === "/";
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`relative py-[0.5px] text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggleButton
                variant="polygon"
                start="center"
                className="size-9 rounded-full transition-colors duration-200 hover:bg-muted"
              />
              <Button
                size="lg"
                variant="gradient"
                className="rounded-full px-5 transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-100"
                render={<Link href="/#contact" />}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggleButton
                variant="circle"
                start="center"
                className="size-9 rounded-full transition-colors duration-200 hover:bg-muted"
              />
              <button
                onClick={() => dispatch(toggleMobileMenu())}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <span className="relative block w-6 h-6">
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
                      mobileMenuOpen
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-90"
                    }`}
                    aria-hidden="true"
                  />
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
                      mobileMenuOpen
                        ? "opacity-0 rotate-90"
                        : "opacity-100 rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <Container size="xl" className="py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => {
              const isActive = activeSection
                ? item.href === `/#${activeSection}`
                : item.href === "/";
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 40}ms` : "0ms",
                  }}
                  onClick={() => dispatch(closeMobileMenu())}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              className="w-full mt-4 rounded-full transition-transform duration-200 hover:scale-[1.02] active:scale-100"
              variant="gradient"
              render={<Link href="/#contact" onClick={() => dispatch(closeMobileMenu())} />}
            >
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
