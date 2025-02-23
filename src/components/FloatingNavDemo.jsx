export function FloatingNavDemo() {
    const navItems = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ];
  
    return (
      <div>
        <FloatingNav navItems={navItems} />
      </div>
    );
  }
  