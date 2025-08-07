import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiDropbox } from "react-icons/ti";
import styles from "./Menu.module.css";

const preloadAbout = () => import("../../Pages/About");
const preloadProducts = () => import("../../Pages/Products");
const preloadContact = () => import("../../Pages/Contact");

function Menu() {
  const [viewporttWidth, setViewportWidth] = useState<number>(
    window.innerWidth
  );
  const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  const handleMenu = () => {
    if (viewporttWidth < 900) setResponsiveMenu(!responsiveMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} style={responsiveMenu ? {backgroundColor: "transparent"} : undefined}>
        <div className={styles.div_logo} style={responsiveMenu ? {display: 'none', transition: 'none'} : undefined}>
          <span>
            Distribuciones Pereira <TiDropbox color="var(--main-color)"/>
          </span>
        </div>

        <div className={styles.div_links}>
          {viewporttWidth < 900 && (
            <TbMenuDeep
              className={styles.menu_hamburger}
              onClick={handleMenu}
              style={responsiveMenu ? {display: 'none'} : undefined}
            />
          )}
          <ul
            className={`${styles.ul_links} ${
              responsiveMenu ? styles.open_responsive_menu : ""
            }`}
          >
            {responsiveMenu && (
              <IoClose className={styles.close_menu} onClick={handleMenu} />
            )}

            <div className={styles.div_li}>
              <li className={styles.li_links}>
                <Link to="/inicio" onClick={handleMenu}>
                  Inicio
                </Link>
              </li>
              <li className={styles.li_links} onMouseEnter={preloadAbout}>
                <Link to="/sobre_nosotros" onClick={handleMenu}>
                  Sobre Nosotros
                </Link>
              </li>
              <li className={styles.li_links} onMouseEnter={preloadProducts}>
                <Link to="/productos" onClick={handleMenu}>
                  Productos
                </Link>
              </li>
              <li className={styles.li_links} onMouseEnter={preloadContact}>
                <Link to="/contacto" onClick={handleMenu}>
                  Contacto
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Menu };
