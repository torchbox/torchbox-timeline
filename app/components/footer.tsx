import Image from "next/image";
import {baseUrl} from "@/app/lib/utils";

// Add base URL helper for image paths. Uses NEXT_PUBLIC_BASE_URL if provided.
const withBase = (path: string) => (baseUrl ? `${baseUrl}${path}` : path);

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-br from-black to-navy  py-16">
            <div className="container flex flex-col-reverse items-start gap-10 md:flex-row md:justify-between">

                {/* Logos */}
                <ul className="flex items-center gap-8">
                    <li className="grayscale opacity-80 hover:opacity-100 transition">
                        <a
                            href="https://www.bcorporation.net/en-us/find-a-b-corp/company/torchbox/"
                            className="block"
                        >
                            <Image
                                src={withBase('/images/certified_b_corporation_b_corp_.max-100x100.format-webp_3bc1uST.webp')}
                                alt="Certified B Corporation"
                                width={59}
                                height={100}
                                className="h-10 w-auto object-contain filter brightness-0 invert"
                            />
                        </a>
                    </li>

                    <li className="grayscale opacity-80 hover:opacity-100 transition">
                        <a
                            href="https://www.b.co.uk/companies/torchbox"
                            className="block"
                        >
                            <Image
                                src={withBase('/images/2022-top25_best-mid-sized-compa.max-100x100.format-webp_Xl42X5Q.webp')}
                                alt="2022 Top 25 Best Mid Sized Companies"
                                width={150}
                                height={100}
                                className="h-10 w-auto object-contain filter invert"
                            />
                        </a>
                    </li>

                    <li className="grayscale opacity-80 hover:opacity-100 transition">
                        <a
                            href="https://employeeownership.co.uk/"
                            className="block"
                        >
                            <Image
                                src={withBase('/images/EOA_Members_RGB_PNG_EOA_Members.max-200x100.format-webp.webp')}
                                alt="Employee Owned Agency"
                                width={200}
                                height={84}
                                className="h-10 w-auto object-contain filter  "
                            />
                        </a>
                    </li>
                </ul>

                {/* Company details */}
                <div className="text-gray-50 leading-relaxed max-w-md">
                    <p className="font-medium">
                        © Torchbox 2025 – 3rd Floor, 15 Colston St, Bristol, BS1 5AP
                    </p>
                    <p className="mt-2">
                        Registered in England & Wales. Company no. 3983354, VAT no. 752981011
                    </p>
                </div>

            </div>
        </footer>
    );
}
