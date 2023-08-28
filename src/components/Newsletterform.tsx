import React from "react";
import Link from "next/link";

const Newsletterform: React.FC = () => {
    return (
        <main className="w-1/2">
            <div className="flex content-center w-auto">
                <form id="newsletter-form" className="flex-1" method="POST"
                      action="https://7307d5b2.sibforms.com/serve/MUIFAAIFqOVr5xttL9KF61o_PJ1HjUxkrMiZBp50BvHd-DzX3k07U2O6OqvILDtN8FCjdwMPRnGU8jAPYiUIkAs99BW-5Gm10ZhxVL1TdYMEuAGFWvCZHCrHXH76oiOmb7kMKY9j4FDiPBovbyuMCQCfZf2GfUN8r932B6Y8kMMNTal2gmjNBkOe9KmfI34X5INKvWNBAiN4RXf9">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            email</label>
                        <input type="email" id="EMAIL" name="EMAIL" data-required="true"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                               placeholder="name@email.com" required/>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="OPT_IN" type="checkbox" name="OPT_IN"
                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                   data-required="true" required/>
                        </div>
                        <label htmlFor="OPT_IN" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I
                            agree to receive your newsletters and accept the <Link href="/privacy-policy"
                                                                                   className="text-blue-600 hover:underline dark:text-blue-500">data
                                privacy statement</Link></label>
                    </div>
                    <label className="pt-1 pb-8 text-sm">
                        You may unsubscribe at any time using the link in my newsletter.
                    </label>
                    <div>
                        <div>
                            <svg width={0} height={0} version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <symbol id="svgIcon-sphere" viewBox="0 0 63 63">
                                        <path className="path1"
                                              d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z"
                                              fill="#0092FF"/>
                                    </symbol>
                                </defs>
                            </svg>
                            <svg style={{width: '63px', height: '63px'}}>
                                <use xlinkHref="#svgIcon-sphere"/>
                            </svg>
                        </div>
                        <p className="font-serif text-left text-xs text-slate-500">
                            We use Brevo as our marketing platform. By Clicking below to submit this form, you
                            acknowledge that the information you provided will be transferred to Brevo for processing in
                            accordance with their <Link target="_blank"
                                                     href="https://www.brevo.com/legal/termsofuse/">terms of
                            use</Link>
                        </p>
                    </div>

                    <button form="newsletter-form" type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Subscribe
                    </button>
                </form>
            </div>

        </main>
    );
};

export default Newsletterform;
