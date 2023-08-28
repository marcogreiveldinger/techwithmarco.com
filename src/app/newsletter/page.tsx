import Link from 'next/link'
import NewsletterForm from '@/components/Newsletterform'

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        <Link
                            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="/"
                        >
                            <code className="font-mono font-bold">Tech with Marco</code>
                        </Link>
                    </h1>
                    <div
                        className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                        <Link
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="https://marco-greiveldinger.de"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' '}

                            <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                                <code className="font-mono font-bold">Marco Greiveldinger</code>
                            </p>
                        </Link>
                    </div>
                </div>

                <div
                    className="mb-32 grid relative place-items-center justify-between">
                    <h1 className="mb-4 text-4xl font-mono font-black">Subscribe to my weekly programming espresso newsletter</h1>
                    <NewsletterForm />
                </div>

                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <Link
                        href="https://youtube.com/@techwithmarco"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Youtube{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            Find my channel with a lot of tutorials.
                        </p>
                    </Link>

                    <Link
                        href="https://github.com/marcogreiveldinger"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Github{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            My GitHub profile. Feel free to follow!
                        </p>
                    </Link>

                    <Link
                        href="/newsletter"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Newsletter{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            Explore the Next.js 13 playground.
                        </p>
                    </Link>

                    <Link
                        href="mailto:hello@techwithmarco.com"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Drop me a mail{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            Contact me for further questions.
                        </p>
                    </Link>
                </div>
                <div className="flex items-stretch">
                    <p className="text-white font-mono">
                        <Link
                            href="/imprint"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        >
                            Imprint
                        </Link>
                    </p>
                    <p className="text-white font-mono">
                        <Link
                            href="/privacy-policy"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        >
                            Privacy-policy
                        </Link>
                    </p>
                </div>
            </main>
        </>

    )
}
