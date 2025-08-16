import { type Product, type ProductsByCategory } from "../../Types";
import { useState, useMemo, useRef, useEffect } from "react";
import { useFetch, useSeekerContext } from "../../Hooks";
import { FaSearch } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import styles from "./Seeker.module.css";

interface props {
  urlData: string;
  setMethod: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Seeker({ setMethod, urlData }: props) {
  const { data } = useFetch<ProductsByCategory>(urlData);
  const { setLoadingSeeker } = useSeekerContext();

  const [inputValue, setInputValue] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filtered = useRef<Product[]>([]);
  const debouncedInputValue = useRef<string>("");

  const allProducts: Product[] = useMemo(() => {
    if (!data) return [];
    return Object.values(data.Products).flat();
  }, [data]);

  const categories = useMemo(() => {
    if (!data) return [];
    return Object.keys(data.Products);
  }, [data]);

  const arrayChar_products: string[][] = allProducts.map((card) => {
    return card.title.split("");
  });

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (text === "") {
      initialValue_filtered();
      setLoadingSeeker(true);

      setTimeout(() => {
        setLoadingSeeker(false);
      }, 500);
    }
  };

  const handleButtonCategory = (category: string) => {
    setIsDropdownOpen(false);
    setLoadingSeeker(true);

    filtered.current = [];

    setInputValue("");

    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].category == category) {
        filtered.current.push(allProducts[i]);
      }
    }

    setMethod(filtered.current);

    setTimeout(() => {
      setLoadingSeeker(false);
    }, 500);
  };

  const handleSearchButton = (): void => {
    if (debouncedInputValue.current !== inputValue && inputValue !== "") {
      filtered.current = [];
      setLoadingSeeker(true);

      setTimeout(() => {
        debouncedInputValue.current = inputValue;

        const arrayChar_input = inputValue.split("");
        let productMatches = 0;

        for (let e = 0; e < allProducts.length; e++) {
          if (arrayChar_products[e] && arrayChar_input) {
            for (let i = 0; i < arrayChar_input.length; i++) {
              if (
                arrayChar_products[e][i]?.toLowerCase() ===
                arrayChar_input[i]?.toLowerCase()
              ) {
                productMatches++;

                if (arrayChar_input.length === productMatches) {
                  productMatches = 0;
                  filtered.current.push(allProducts[e]);
                }
              } else {
                productMatches = 0;
                break;
              }
            }
          }
        }

        setMethod(filtered.current);
        setLoadingSeeker(false);
      }, 500);
    } else {
      initialValue_filtered(true);
    }
  };

  const handleCategoryButtonClick = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

  const initialValue_filtered = (animation?: boolean) => {
    filtered.current = [];

    allProducts.forEach((product) => {
      filtered.current.push(product);
    });

    if (animation) {
      setLoadingSeeker(true);
      setTimeout(() => {
        setLoadingSeeker(false);
        setMethod(filtered.current);
      }, 500);
    } else {
      setMethod(filtered.current);
    }
  };

  useEffect(() => {
    initialValue_filtered();
  }, [data]);

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="¿Que buscas?"
          className={styles.searchInput}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearchButton()}
          onClick={() => setIsDropdownOpen(false)}
          value={inputValue}
        />
        <button
          className={styles.searchButton}
          onClick={() => handleSearchButton()}
        >
          <FaSearch />
        </button>
      </div>

      <div className={styles.filterButtonContainer}>
        <div
          className={styles.filterButton}
          onClick={handleCategoryButtonClick}
        >
          <MdCategory></MdCategory>
        </div>
        <div
          className={`${styles.filterDropdown} ${
            isDropdownOpen ? styles.show : ""
          }`}
        >
          <div className={styles.dropdownHeader}>Categorías</div>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <span
                key={category}
                className={styles.categoryItem}
                onClick={() => handleButtonCategory(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Seeker };
