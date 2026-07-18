// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const LINKS = [
//   { href: "/services", label: "Services" },
//   { href: "/about", label: "About" },
//   { href: "/gallery", label: "Gallery" },
//   { href: "/reviews", label: "Reviews" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Nav() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="site-nav">
//       <div className="wrap">
//         <Link href="/" className="brand" onClick={() => setOpen(false)}>
//           <span className="dot" />
//           Douglas Driveway Services
//         </Link>

//         <button
//           className="nav-toggle"
//           aria-label="Toggle menu"
//           onClick={() => setOpen((v) => !v)}
//         >
//           {open ? "✕" : "☰"}
//         </button>

//         <div className={`navlinks${open ? " open" : ""}`}>
//           {LINKS.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               className={`navlink${pathname === l.href ? " active" : ""}`}
//               onClick={() => setOpen(false)}
//             >
//               {l.label}
//             </Link>
//           ))}
//           <a href="tel:3065408311" className="nav-call">
//             (306) 540-8311
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="dot" />
          Douglas Driveway Services
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`navlinks${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`navlink${pathname === l.href ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:3065408311" className="nav-call">
            (306) 540-8311
          </a>
        </div>
      </div>
    </nav>
  );
}