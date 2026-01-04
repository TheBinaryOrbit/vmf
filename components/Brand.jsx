export default function Brand() {
    // Define your brand data array
    const brands = [
        {
            name: "Google",
            logoUrl: "https://www.axismaxlife.com/static-page/assets/homepage/axis-max-life-insurance-logo.svg",
            href: "https://www.google.com",
        },
        {
            name: "Microsoft",
            logoUrl: "https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/HDFCLife25Yearslogo-min.png",
            href: "https://www.microsoft.com",
        },
        {
            name: "Amazon",
            logoUrl: "https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/navigations/new-navigation-icon/Logo.svg",
            href: "https://www.amazon.com",
        },
        {
            name: "Microsoft",
            logoUrl: "https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/HDFCLife25Yearslogo-min.png",
            href: "https://www.microsoft.com",
        },
        {
            name: "Amazon",
            logoUrl: "https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/navigations/new-navigation-icon/Logo.svg",
            href: "https://www.amazon.com",
        },
        {
            name: "Google",
            logoUrl: "https://www.axismaxlife.com/static-page/assets/homepage/axis-max-life-insurance-logo.svg",
            href: "https://www.google.com",
        },
        {
            name: "Microsoft",
            logoUrl: "https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/HDFCLife25Yearslogo-min.png",
            href: "https://www.microsoft.com",
        },
        {
            name: "Amazon",
            logoUrl: "https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/navigations/new-navigation-icon/Logo.svg",
            href: "https://www.amazon.com",
        },
        {
            name: "Microsoft",
            logoUrl: "https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/HDFCLife25Yearslogo-min.png",
            href: "https://www.microsoft.com",
        },
        {
            name: "Amazon",
            logoUrl: "https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/navigations/new-navigation-icon/Logo.svg",
            href: "https://www.amazon.com",
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
                            Brands Associated With
                        </h2>
                    </div>

                    {/* Brand Grid mapping */}
                    <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 xl:grid-cols-5 xl:gap-12">
                        {brands.map((brand, index) => (
                            <p
                                key={index}
                                // href={brand.href}
                                className="flex justify-center items-center group p-4"
                            >
                                <img
                                    src={brand.logoUrl}
                                    alt={`${brand.name} logo`}
                                    className="h-10 w-full max-w-[140px] object-contain transition-all duration-300  group-hover:opacity-100"
                                />
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}