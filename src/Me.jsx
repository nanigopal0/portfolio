export default function Me() {
  return (
    <div className="flex justify-center">
      <div
        className="mb-16 mt-2 backdrop-blur-lg lg:w-4/6 bg-purple-600/20 border
       border-white/15 rounded-xl"
      >
        <div className="p-4 md:flex justify-between items-center ">
          <p className="sm:text-3xl text-2xl mb-4  font-medium md:mb-0 font-mono text-center">
            Hi, This is&nbsp;
            <span className=" font-mono text-sky-400">Nanigopal Rana.</span>
          </p>

          <div className="place-self-center overflow-hidden rounded-full w-32 h-32 shadow-2xl ">
            <img
              src="/mypic.jpg"
              alt="profile-picture"
              className="w-full h-full object-top scale-240 hover:scale-260
               transition translate-y-12 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
