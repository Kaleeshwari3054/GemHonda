import React from "react";

/**
 * Disclaimer.jsx
 * React component (JSX) containing the vehicle information disclaimer for Gem Honda.
 * - Default export: Disclaimer
 * - Tailwind CSS classes used for quick styling (remove or change if you don't use Tailwind)
 *
 * Usage:
 * import Disclaimer from './Disclaimer';
 * <Disclaimer />
 *
 * You can pass a `dealerName` prop to replace the displayed dealer name.
 */

export default function Disclaimer({ dealerName = "Gem Honda" }) {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Vehicle Information Disclaimer</h2>

      <p className="mb-3">
        The information on vehicles provided by <strong>{dealerName}</strong> is provided on an <em>"as is"</em> and <em>"as available"</em> basis and {dealerName} makes no
        representations or warranties, expressed or implied, to any actual or prospective purchaser or owner of any vehicle as to the existence,
        ownership, or condition of the vehicle or as to the accuracy or completeness of any information about the vehicle contained in this
        service. {dealerName} reserves the right to terminate any product or price at any time, in its sole discretion. You acknowledge that any
        reliance upon any such materials shall be at your sole risk. {dealerName} reserves the right, in its sole discretion, to correct any error
        or omission in any portion of the service or materials. Any and all concerns, differences, or discrepancies must be addressed with {dealerName}
        prior to the sale of the vehicle.
      </p>

      <p className="mb-3">
        While we try to make sure that all prices, information, and related content posted are accurate at all times, we cannot be responsible for
        typographical and other errors that may appear on the site. If the posted price, information, or other details for a vehicle or service are
        incorrect due to typographical or other error (for example, data transmission), this dealership is NOT responsible. If we discover a mistake
        or error, we will endeavor to provide the correction to you as soon as we become aware of it. We make every effort to provide the most
        accurate, up-to-the-minute information; however, it is your responsibility to verify with our dealership that all details listed are accurate.
      </p>

      <p className="mb-3">
        Vehicle images and descriptions posted on our website pages are representations provided for informational purposes only and should not be
        considered final or definitive. Please note that the actual vehicle may differ slightly from specifications and/or pictures. Our dealership is
        not responsible for typographical, pricing, product information, advertising, or other errors. Advertised prices and information are subject
        to change without notice.
      </p>

      <p className="mb-3">
        In the event a vehicle is listed at an incorrect price due to typographical, photographic, technical, or other error, our dealership reserves
        the right to refuse or cancel any orders placed for a vehicle listed at the incorrect price.
      </p>

      <p className="mb-3">
        You agree to release, hold harmless, and indemnify <strong>{dealerName}</strong> and its employees from any and all liability arising from
        incorrect or incomplete information regarding any vehicle. {dealerName} specifically disclaims any implied warranties, including the
        warranties of merchantability and fitness for a particular purpose regarding any vehicle with information provided in this service. All
        vehicles are subject to prior sale.
      </p>

      <footer className="mt-4 text-sm text-gray-600">
        <p>If you would like this disclaimer customized (add contact details, location, or legal counsel review language), pass the details and
        I will update it.</p>
      </footer>
    </section>
  );
}
