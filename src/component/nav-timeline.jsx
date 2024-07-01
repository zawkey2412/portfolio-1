function Navtime({ page }) {
    return (
      <div className="timeline fixed inset-y-1/2 right-0 ">
        <div className="flex flex-row-reverse items-center">
        <div className="flex bg-gold-metal w-20 h-px ml-6">
        </div>
        <div className="flex flex-col">
          {Array.from({ length: page }, (_, index) => (
            <div key={index} className="flex text-gold-metal">
              {index + 1}
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }

  export default Navtime;