function Menu(props) {
  return (
    <div className="mx-4 text-white hover:text-gold-metal hover;cursor-pointer">
      <p className=" relative after:bg-gold-metal after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-3 hover:after:w-1/2 after:transition-all after:duration-300 cursor-pointer">
        {props.children}
      </p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex h-14 justify-center items-center">
    <Menu>About Me</Menu> <Menu>Resume</Menu>
      <Menu>Portfolio</Menu>
    </div>
  );
}


export default Navbar;
