import { brands } from '@/script/data';

export default function Brand() {


    return (
        <section className="white">
            <section className="md:py-16 py-12 bg-white md:rounded-br-[15%] rounded-br-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    {/* Header Section */}
                    <div className="mb-14 text-center">
                        <span className="inline-block px-4 py-1 border border-[#910606]/40 text-[#910606] rounded-md text-sm font-semibold mb-4 bg-blue-50/30">
                            {brands.badge}
          </span>
                        <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-balance text-foreground">
                            {brands.heading}
                        </h2>
                    </div>

                    {/* Brand Grid mapping */}
                    <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 xl:grid-cols-5 xl:gap-12">
                        {brands.list.map((brand, index) => (
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