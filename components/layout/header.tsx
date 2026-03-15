"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Cases", href: "/cases" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#2c4d98]/10 shadow-[0_8px_30px_rgba(44,77,152,0.06)]"
          : "bg-white/88 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
<Link href="/" className="flex items-center">
  <Image
    src="/pixiQ_V1.png"
    alt="pixiQ"
    className={cn("w-auto transition-all duration-300", isScrolled ? "h-7" : "h-10")}
    width={140}
    height={40}
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-[#4b5563] hover:text-[#2c4d98] transition-colors duration-200 tracking-[0.01em]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-md border border-[#2c4d98]/30 px-3 py-1 text-sm font-medium text-[#2c4d98] hover:bg-[#2c4d98]/10 transition"
              >
                EN
              </button>
              <button
                type="button"
                className="rounded-md border border-[#2c4d98]/30 px-3 py-1 text-sm font-medium text-[#2c4d98] hover:bg-[#2c4d98]/10 transition"
              >
                NL
              </button>
              <button
                type="button"
                className="rounded-md border border-[#2c4d98]/30 px-3 py-1 text-sm font-medium text-[#2c4d98] hover:bg-[#2c4d98]/10 transition"
              >
                FR
              </button>
            </div>
            <Button
              asChild
              className="hover:opacity-90 text-white font-medium px-6"
              style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
            >
              <Link href="/contact">Book Meeting</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-foreground transition-colors"
                style={{ ['--hover-color' as string]: '#2c4d98' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2c4d98'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button
                asChild
                className="rounded-md px-6 py-2.5 text-white font-semibold tracking-[0.01em] hover:opacity-95 transition-all duration-200"
                style={{ backgroundImage: 'linear-gradient(to right, #2c4d98, #1698d5)' }}
              >
                <Link href="/contact">Book Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
