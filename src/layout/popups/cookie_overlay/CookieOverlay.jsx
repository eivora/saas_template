import React, { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VisitorContext from '../../../context/visitor/visitorContext';

import useDelayedRender from '../../../hooks/useDelayedRender';

const CookieOverlay = ({ className }) => {
  const default_classnames = '';
  const classProps = classnames(default_classnames, className);
  const visitorContext = useContext(VisitorContext);
  const { visitor, setVisitor } = visitorContext;
  const [open, setOpen] = useState(true);

  const DelayedRender = ({ delay, children }) => useDelayedRender({ delay })(() => children);

  const onAcceptCookies = () => {
    setOpen(false);
    setVisitor({ ...visitor, cookies_consent: true });
  };
  return (
    <DelayedRender delay={2000}>
      <div className={classProps}>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-900"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity pointer-events-none" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        We use cookies!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          To track usage we use cookies. This is so that we can understand what
                          works and not and hence improve the user experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                      onClick={onAcceptCookies}>
                      Accept cookies
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </DelayedRender>
  );
};

CookieOverlay.defaultProps = {
  className: '',
  children: ''
};

CookieOverlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default CookieOverlay;
