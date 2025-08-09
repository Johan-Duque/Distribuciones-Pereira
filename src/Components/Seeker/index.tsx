import { useState, useEffect, useMemo, useRef } from "react";
import { useFetch, useSeekerContext } from "../../Hooks";
import styles from "./Seeker.module.css";

interface Product {
  img: string;
  alt_img: string;
  title: string;
  text: string;
  category: string;
}

interface ProductsByCategory {
  Products: {
    [key: string]: Product[];
  };
}

function Seeker() {
  const { data } = useFetch<ProductsByCategory>("data.json");
  const { setFilteredProducts, setMethodRender, setLoadingSeeker, methodRender } = useSeekerContext();

  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedInputValue, setDebouncedInputValue] = useState<string>(""); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const productMatches = useRef<number>(0);
  const arrayChar_input = useRef<null | string[]>(null);
  const filtered = useRef<Product[]>([]);

  const allProducts: Product[] = useMemo(() => {
    if (!data) return [];
    return Object.values(data.Products).flat();
  }, [data]);

  const categories = useMemo(() => {
    if (!data) return [];
    return Object.keys(data.Products);
  }, [data]);

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setFilteredProducts([]);
    filtered.current = [];
    setMethodRender(1);
  };

  const arrayChar_products: string[][] = allProducts.map((card) => {
    return card.title.split("");
  });

  // ----------------------------------------------------
  // Nuevo useEffect para la funcionalidad de debounce
  // ----------------------------------------------------
  useEffect(() => {
    if (methodRender == 1) {
      setLoadingSeeker(true);
    }
    const timerId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500); // El tiempo de espera puede ser ajustado (ej. 500ms)

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);
  // ----------------------------------------------------

  // ----------------------------------------------------
  // La lógica de búsqueda ahora se ejecuta cuando `debouncedInputValue` cambia
  // ----------------------------------------------------
  useEffect(() => {
    arrayChar_input.current = debouncedInputValue.split("");

    if (debouncedInputValue !== "") {
      for (let e = 0; e < allProducts.length; e++) {
        for (let i = 0; i < arrayChar_input.current.length; i++) {
          if (
            arrayChar_products[e][i].toLowerCase() ==
            arrayChar_input.current[i].toLowerCase()
          ) {
            productMatches.current++;

            if (arrayChar_input.current.length == productMatches.current) {
              productMatches.current = 0;
              filtered.current.push(allProducts[e]);
              console.log(
                "Coincide con: " +
                  allProducts[e].title +
                  " | State: " +
                  productMatches.current
              );
            }
          } else {
            productMatches.current = 0;
            break;
          }
        }
      }
    } else {
      setMethodRender(0);
    }

    setFilteredProducts(filtered.current);
    setLoadingSeeker(false);
    
  }, [debouncedInputValue, allProducts]); // `allProducts` también debe ser una dependencia
  // ----------------------------------------------------

  return (
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="¿Que producto buscas exactamente?"
            className={styles.searchInput}
            onChange={(e) => handleInputChange(e.target.value)}
            value={inputValue}
          />
      
                 <div 
          className={styles.filterButtonContainer}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          >
          <button
            className={styles.filterButton}
          >
            Categorías
          </button>
          <div
            className={`${styles.filterDropdown} ${isDropdownOpen ? styles.show : ''}`}
          >
            {categories.map((category) => (
              <p key={category}>{category}</p>
            ))}
          </div>
        </div>
        </div>
      </div>
  );
}

export { Seeker };

/* 


import { useRef, useState, useEffect } from "react";
import { useFetch, useSeekerContext } from "../../Hooks";
import styles from "./Seeker.module.css";

interface Product {
  img: string;
  alt_img: string;
  title: string;
  text: string;
  category: string;
}

interface ProductsByCategory {
  Products: {
    [key: string]: Product[];
  };
}

function Seeker() {
  const { data } = useFetch<ProductsByCategory>("data.json");
  const { filteredProducts, setFilteredProducts, setMethodRender } =
    useSeekerContext();
  const [inputValue, setInputValue] = useState<string>("");

  const productMatches = useRef<number>(0);
  const arrayChar_input = useRef<null | string[]>(null);

  const allProducts: Product[] = data
    ? Object.values(data.Products).flat()
    : [];

  const arrayChar_products: string[][] = allProducts.map((card) => {
    return card.title.split("");
  });

  const AddProduct = (product: Product) => {
    const newArray: Product[] = [...filteredProducts, product];
    setFilteredProducts(newArray);
    newArray.forEach(element => console.log(element.title))
  };

  const inputChange = (text: string) => {
    setInputValue(text);
    setFilteredProducts([]);
    setMethodRender(1);
  };

  useEffect(() => {
    arrayChar_input.current = inputValue.split("");

    if (inputValue !== "") {
      for (let e = 0; e < allProducts.length; e++) {
        for (let i = 0; i < arrayChar_input.current.length; i++) {
          if (
            arrayChar_products[e][i].toLowerCase() ==
            arrayChar_input.current[i].toLowerCase()
          ) {
            productMatches.current++;

            if (arrayChar_input.current.length == productMatches.current) {
              productMatches.current = 0;
              AddProduct(allProducts[e]);
              console.log(
                "Coincide con: " +
                  allProducts[e].title +
                  " | State: " +
                  productMatches.current
              );
            }
          } else {
            productMatches.current = 0;
            break;
          }
        }
      }
    }

  }, [inputValue]);

  useEffect(() => {
    console.log(filteredProducts);
  })

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="¿Que producto buscas exactamente?"
          className={styles.searchInput}
          onChange={(e) => inputChange(e.target.value)}
        />
        <button className={styles.searchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <div className={styles.filterButtonContainer}>
        <button className={styles.filterButton}>Categorías</button>
        <div className={styles.filterDropdown}>
          <a href="#">Electrónica</a>
          <a href="#">Electrónica</a>
          <a href="#">Electrónica</a>
        </div>
      </div>
    </div>
  );
}

export { Seeker };

 */