import React from 'react';

export default function HeroBanner({ pretitle = '', title = '', description = '', backgroundImage = null }) {
    const bgSrc = backgroundImage && backgroundImage.src ? backgroundImage.src : (typeof backgroundImage === 'string' ? backgroundImage : '');

    return (
        <section className="relative h-[40vh] overflow-hidden">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 z-0">
                {bgSrc ? (
                    <img
                        src={bgSrc}
                        alt={title || 'Background'}
                        className="h-full w-full object-cover object-center"
                    />
                ) : null}
                <div className="absolute inset-0 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 h-full flex items-center justify-center">
                <div className="mx-auto max-w-4xl text-center text-white">
                    {pretitle ? (
                        <div className="mb-8 inline-flex items-center rounded-full bg-red-100/90 px-4 py-2 text-sm font-medium text-[#164972] ring-1 ring-red-300">
                            {pretitle}
                        </div>
                    ) : null}

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                        {title}
                    </h1>
                    {description ? (
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-red-100">
                            {description}
                        </p>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
