import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import Sprites from "@/app/components/sprites";
import DesktopScrollEffect from "@/app/components/desktopScrollEffect";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Torchbox 25 Years",
    description: "A timeline and celebration of 25 years of Torchbox",
    icons: [
        {url: "/favicon-32x32.png", type: "image/png", sizes: "32x32"},
        {url: "/favicon-16x16.png", type: "image/png", sizes: "16x16"},
    ],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${outfit.variable} antialiased`}>
        <header className="w-full bg-black text-white">
            <div className="container flex justify-start items-center py-5">
                <a
                    href="https://www.torchbox.com"
                    aria-label="Torchbox"
                    className="text-white hover:text-torchbox"
                >
                    <svg className="w-[147px] h-[39px]" focusable="false">
                        <title>Torchbox</title>
                        <use xlinkHref="#logo-torchbox" href="#logo-torchbox"></use>
                    </svg>
                </a>
            </div>

            <div className="bg-gradient-to-br from-black to-navy">
                <div className="py-24 sm:py-32 container">
                    <div className="max-w-4xl">
                        <h1 className="text-balance text-4xl font-semibold tracking-tight text-sky sm:text-5xl max-w-4x">
                            Celebrating 25 years of Torchbox {'🎉'}
                        </h1>
                        <p className="mt-6 mtext-pretty text-lg/8 text-sky max-w-3xl">
                            This year, Torchbox turns 25, a milestone that means a lot to us as we reflect on the people, organisations and communities we’ve been so lucky to work with since Tom and Olly founded the company back in 2000.
                            This wonderful timeline shares just a handful of moments and clients from the past 25 years. There are far more than we could ever fit into one post, and we’re grateful to every client, partner, and co-owner
                            who has been part of our story.
                        </p>
                    </div>
                </div>
            </div>
        </header>

        {children}

        <DesktopScrollEffect/>

        <Sprites/>
        </body>
        </html>
    );
}
