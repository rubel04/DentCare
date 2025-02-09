const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-gray-100">
        <form className="space-y-5">
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <label>First Name</label>
              <br />
              <input
                className="w-full py-2 rounded border border-gray-400 shadow"
                type="text"
                name="firstName"
                placeholder="Firs Name"
              />
            </div>
            <div className="w-full">
              <label>Last Name</label>
              <br />
              <input
                className="w-full py-2 rounded border border-gray-400 shadow"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <label>Email</label>
              <br />
              <input
                className="w-full py-2 rounded border border-gray-400 shadow"
                type="text"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full">
              <label>Phone Number</label>
              <br />
              <input
                className="w-full py-2 rounded border border-gray-400 shadow"
                type="text"
                name="phone"
                placeholder="Your Phone Number"
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <label>Appointment Date</label>
              <br />
              <input
                className="w-full py-2 rounded border border-gray-400 shadow"
                type="date"
                name="date"
                placeholder="Date"
              />
            </div>
            <div className="w-full">
              <label>Address</label>
              <br />
              <input
                className="w-full py-2 rounded border border-gray-400 shadow"
                type="text"
                name="address"
                placeholder="Your Address"
              />
            </div>
          </div>
          <div className="modal-action block">
            <form method="dialog">
              <button type="submit" className="px-8 block m-auto py-3 cursor-pointer rounded-2xl font-medium text-[#00bcf7] border border-[#00bcf7])">
                Book Appointment
              </button>
            </form>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
