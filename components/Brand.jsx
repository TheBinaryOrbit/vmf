export default function Brand() {
    // Define your brand data array
    const brands = [
        {
            name: "Google",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            href: "https://www.google.com",
        },
        {
            name: "Microsoft",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            href: "https://www.microsoft.com",
        },
        {
            name: "Amazon",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            href: "https://www.amazon.com",
        },
        {
            name: "Apple",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            href: "https://www.apple.com",
        },
        {
            name: "Meta",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Meta_Platforms_Inc._logo.svg",
            href: "https://about.meta.com",
        },
        {
            name: "Netflix",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            href: "https://www.netflix.com",
        },
        {
            name: "Tesla",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Tesla_Motors.svg",
            href: "https://www.tesla.com",
        },
        {
            name: "Adobe",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Adobe_Corporate_logo.svg",
            href: "https://www.adobe.com",
        },
    ];


    return (
        <section className="white">
            <section className="md:py-16 py-12 bg-white md:rounded-br-[15%] rounded-br-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    {/* Header Section */}
                    <div className="mb-14 text-center">
                        <span className="inline-block px-4 py-1 border border-[#910606]/40 text-[#910606] rounded-md text-sm font-semibold mb-4 bg-blue-50/30">
                            our partners
          </span>
                        <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-balance text-foreground">
                            Brands Trust Us
                        </h2>
                    </div>

                    {/* Brand Grid mapping */}
                    <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 xl:grid-cols-5 xl:gap-12">
                        {brands.map((brand, index) => (
                            <a
                                key={index}
                                href={brand.href}
                                className="flex justify-center items-center group p-4"
                            >
                                <img
                                    src={brand.logoUrl}
                                    alt={`${brand.name} logo`}
                                    className="h-10 w-full max-w-[140px] object-contain transition-all duration-300  group-hover:opacity-100"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}