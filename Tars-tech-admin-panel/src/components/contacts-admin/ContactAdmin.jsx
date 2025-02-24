import { useState, useEffect } from 'react';

export const ContactsAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null)

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://tars-tech-backend.vercel.app/api/contacts');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
  const confirmDelete = (id) => {
    setSelectedContactId(id);
    setShowModal(true);
  };
  const deleteContact = async () => {
    try {
      const response = await fetch(`https://tars-tech-backend.vercel.app/api/contacts/${selectedContactId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setContacts(contacts.filter(contact => contact._id !== selectedContactId));
        setShowModal(false)
      } else {
        console.error('Failed to delete contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-3 sm:p-6 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-4 sm:mb-8">Contact Submissions</h2>

      {/* Large screens - Table view */}
      <div className="hidden md:block overflow-x-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <table className="w-full table-auto text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-sm font-semibold">Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Email</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Number</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Message</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Date</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 whitespace-normal">{contact.name}</td>
                <td className="py-4 px-4 whitespace-normal break-all">{contact.email}</td>
                <td className="py-4 px-4 whitespace-normal">{contact.number}</td>
                <td className="py-4 px-4 max-w-xs">
                  <div className="truncate hover:whitespace-normal hover:overflow-visible">
                    {contact.message}
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-normal">{new Date(contact.createdAt).toLocaleString()}</td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => confirmDelete(contact._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile and tablet view - Card layout */}
      <div className="md:hidden space-y-4">
        {contacts.map((contact) => (
          <div key={contact._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="font-semibold text-gray-800">Name:</div>
                <div className="text-right flex-1 ml-4">{contact.name}</div>
              </div>
              <div className="flex justify-between items-start">
                <div className="font-semibold text-gray-800">Email:</div>
                <div className="text-right flex-1 ml-4 break-all">{contact.email}</div>
              </div>
              <div className="flex justify-between items-start">
                <div className="font-semibold text-gray-800">Number:</div>
                <div className="text-right flex-1 ml-4">{contact.number}</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-gray-800">Message:</div>
                <div className="text-sm text-gray-600 break-words">{contact.message}</div>
              </div>
              <div className="flex justify-between items-start">
                <div className="font-semibold text-gray-800">Date:</div>
                <div className="text-right flex-1 ml-4">
                  {new Date(contact.createdAt).toLocaleString()}
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => confirmDelete(contact._id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal - Responsive for all screen sizes */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this contact?</p>
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={deleteContact}
                className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};