const Footer = () => {
  return (
    <div className="px-5">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-neutral-500 text-xs">SAY HELLO</p>
          <h5 className="text-2xl font-semibold">Let's build something</h5>
        </div>
        <p className="text-neutral-500">
          I'am always happy to talk through an idea, hear what you are making,
          or just say hi. The fastest way to reach me is email, and i try to
          read all of it.
        </p>
        <div className="flex gap-3">
          <p className="border px-4 py-1 border-neutral-300 rounded-md text-neutral-600">
            mohitchauhanwrk@gamil.com
          </p>
          <button className="border px-4 py-1 border-neutral-300 rounded-md text-neutral-600">
            Resume
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
