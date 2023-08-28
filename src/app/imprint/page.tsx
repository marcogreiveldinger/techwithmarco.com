import React from "react";
import { Metadata } from "next";
import Link from "next/link";

type ImprintDataType = {
  name: string;
  address: string;
  email: string;
};

const imprintData: ImprintDataType = {
  name: "Marco Greiveldinger",
  address: "Kleiberweg 6a, 21244 Buchholz in der Nordheide, Germany",
  email: "hello@techwithmarco.com",
};

const ImprintPage: React.FC = () => {
  return (
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


      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Imprint</h1>
        <p className="mb-8">Information pursuant to § 5 TMG:</p>
        <div>
          <p>
            <strong>Name:</strong> {imprintData.name}
          </p>
          <p>
            <strong>Address:</strong> {imprintData.address}
          </p>
          <p>
            <strong>Email:</strong> {imprintData.email}
          </p>
        </div>
        <hr className="mt-2" />
        <h1 className="text-2xl font-bold mt-2">VAT-ID</h1>
        <p>
          Value-added tax identification number pursuant to § 27 a
          Umsatzsteuergesetz: DE360916583
        </p>
        <h1 className="text-2xl font-bold mt-2">Editorially responsible</h1>
        <div>
          <p>
            <strong>Name:</strong> {imprintData.name}
          </p>
          <p>
            <strong>Address:</strong> {imprintData.address}
          </p>
        </div>
        <h1 className="text-2xl font-bold mt-2">EU Dispute Resolution</h1>
        <p>
          The European Commission provides a platform for online dispute
          resolution (OS):
          <Link
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </Link>
        </p>
        <p>You can find our e-mail address in the imprint above.</p>

        <h1 className="text-2xl font-bold mt-2">
          Consumer dispute resolution/universal arbitration board
        </h1>
        <p>
          We are not prepared or obliged to participate in dispute resolution
          proceedings before a consumer arbitration board. participate.
        </p>
      </div>
    </main>
  );
};

export default ImprintPage;

export const metadata: Metadata = {
  title: "Imprint",
  description: undefined,
  robots: {
    follow: false,
    index: false,
  },
};
