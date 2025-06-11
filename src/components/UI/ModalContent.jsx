export default function ModalContent({ onClose }) {
  return (
    <div className="relative w-full rounded-xl shadow-xl">

      {/* ❌ Close Button */}
      <button
        onClick={onClose}
        className="absolute -top-6 -right-4 xs:-top-11 xs:-right-1 sm:-top-11 sm:-right-2 lg:-top-6 lg:-right-7 text-white text-xl z-10 hover:opacity-70"
      >
        ✕
      </button>

      {/* 🟣 Header */}
      <div className="relative px-0 py-0 md:px-12 md:py-7 bg-white md:bg-primary500 rounded-t-xl text-left">
        
        {/* Dots - Left (Hidden on < md) */}
        <div className="absolute top-7 left-2 hidden md:flex flex-row gap-[5px]">
          {[...Array(2)].map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-[5px]">
              {[...Array(6)].map((_, rowIndex) => (
                <div
                  key={`${colIndex}-${rowIndex}`}
                  className="w-1 h-1 bg-accent500 rounded-full"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Dots - Right (Hidden on < md) */}
        <div className="absolute top-7 right-2 hidden md:flex flex-row gap-[5px]">
          {[...Array(2)].map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-[5px]">
              {[...Array(6)].map((_, rowIndex) => (
                <div
                  key={`${colIndex}-${rowIndex}`}
                  className="w-1 h-1 bg-accent500 rounded-full"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="px-6 py-6 md:px-0 md:py-0 xs:py-4">
          <h2 className="text-3xl md:text-4xl font-bold text-accent500">
            Supercharge
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 md:text-white mt-1">
            your business
          </h3>
          <p className="mt-2 text-sm text-gray-800 md:text-white max-w-sm">
            Interested in learning more about how Yadora can grow your small business?
          </p>
        </div>
      </div>

      {/* 🧠 Input with Button (always mobile layout even at 1000px+) */}
      <div className="px-6 py-6 custom:px-6 custom:py-6 md:px-6 md:py-6  bg-white rounded-b-xl">
        <div className="relative w-full">
          <input
            type="email"
            placeholder="janedoe@gmail.com"
            className="w-full pr-[130px] pl-4 py-4 rounded-xl text-sm bg-gray-50 text-gray-700 outline-none border-[1.6px] border-transparent focus:border-accent500"
          />
          <button
            className="absolute top-1/2 -translate-y-1/2 right-2 px-3 py-2.5 bg-primary800 text-white text-sm font-semibold rounded-lg hover:bg-accent500 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
}
