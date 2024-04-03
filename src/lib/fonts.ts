import { JetBrains_Mono as FontMono, Inter } from "next/font/google"

// If loading a variable font, you don't need to specify the font weight
export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
})

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
