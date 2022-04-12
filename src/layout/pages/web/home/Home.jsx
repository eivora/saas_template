import React, { Fragment, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline';

import { Tab } from '@headlessui/react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import hero_illustration from '../../../../assets/eight.svg';

import AuthContext from '../../../../context/auth/authContext';
import Head from '../../shared/head/Head';
import Topnav from '../../../navigation/topnav';

const tabs = [
  {
    name: 'Private Equity',
    features: [
      {
        name: 'Adaptive and modular',
        description:
          'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt:
          'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.'
      }
    ]
  },
  {
    name: 'Wealth management',
    features: [
      {
        name: 'Natural wood options',
        description:
          'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.'
      }
    ]
  },
  {
    name: 'M&A',
    features: [
      {
        name: 'Helpful around the home',
        description:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt:
          'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.'
      }
    ]
  },
  {
    name: 'B2B Sales',
    features: [
      {
        name: "Everything you'll need",
        description:
          'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.'
      }
    ]
  }
];

const Home = ({ className }) => {
  let navigate = useNavigate();
  const { state } = useLocation();
  const default_classnames = 'mx-auto items-center';
  const classProps = classnames(default_classnames, className);
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const onSignIn = () => {
    navigate('/sign-in', { state });
  };
  const onGoToApp = () => {
    navigate('/app', { state });
  };

  return (
    <main className="bg-slate-800">
      <Head title="Saas template app" />
      <Topnav className="" />
      <div className="py-16 -mt-20" />
      <section className={classProps}>
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    Bäst koll på onoterade bolag
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Med Eivora så får du bäst koll på onoterade bolag i Sverige. Vår platform och
                    teknik hjälper dig att fatta de bästa besluten snabbare.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Emailaddress
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Din emailadress"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-pink-600 text-white font-medium hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 focus:ring-offset-gray-900">
                            Prova gratis
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-gray-300 sm:mt-4">
                        Prova gratis i 14 dagar, helt fritt och utan att ange betalningsuppgifter.
                        Det enda du behöver är ditt konto som du skapar här.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={hero_illustration}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*         {isAuthenticated ? (
                    <button className="btn btn-secondary" onClick={onGoToApp}>
                      Go to app
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={onSignIn}>
                      Sign in
                    </button>
                  )} */}
      </section>

      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Stay on top of customer support
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada
                    faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis
                    sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-300">
                      &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci
                      risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-medium text-gray-500">
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Better understand your customers
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada
                    faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis
                    sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

Home.defaultProps = {
  className: ''
};

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
