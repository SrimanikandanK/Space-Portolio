import React from 'react';

const ContactMe = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-8">Hey Folks!</h1>
      
      {/* Features List */}
      <div className="space-y-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white">🌐</span>
          </div>
          <p className="text-gray-700">Wanna build Websites or App?</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white">&lt;/&gt;</span>
          </div>
          <p className="text-gray-700">Aspiring to be a developer? But no idea how to start?</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white">≡</span>
          </div>
          <p className="text-gray-700">Wanna Collaborate or pitch in for some Fun/Real projects?</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white">?</span>
          </div>
          <p className="text-gray-700">Maybe wanna learn something new or anything to ask?</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h3 className="font-semibold mb-1">Call/Whatsapp</h3>
          <a href="tel:+919677633146" className="text-blue-600 hover:text-blue-800">
            +91 9677633146
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold mb-1">Email</h3>
          <a href="mailto:adhityamurali03@gmail.com" className="text-blue-600 hover:text-blue-800">
            adhityamurali03@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe; 