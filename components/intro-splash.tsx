"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function IntroSplash() {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem("pixiq-intro-shown")
    if (!hasShown) {
      setShowIntro(true)
      const timer = setTimeout(() => {
        setShowIntro(false)
        sessionStorage.setItem("pixiq-intro-shown", "true")
      }, 2800)

      const handleScroll = () => {
        setShowIntro(false)
        sessionStorage.setItem("pixiq-intro-shown", "true")
        window.removeEventListener("scroll", handleScroll)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        clearTimeout(timer)
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  if (!showIntro) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c4d98]/5 to-[#1698d5]/5" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)" }} />
      <div className="relative text-center">
        <Image
          src="/pixiQ_V1.png"
          alt="pixiQ"
          className="h-20 w-auto mx-auto mb-8 opacity-90"
          width={200}
          height={80}
        />
        <h1 className="text-7xl font-bold text-gray-900 mb-4 tracking-tight">
          pixiQ
        </h1>
        <p className="text-xl text-gray-600 font-light">
          Premium Digital Experiences
        </p>
      </div>
    </div>
  )
}