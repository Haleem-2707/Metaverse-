import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi"; // Assuming you're using react-icons

export default function DarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    useEffect(() => {
        const element = document.documentElement; // This targets the root <html> element
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <>
            {theme === "dark" ? (
                <BiSolidSun
                    className="text-2xl cursor-pointer"
                    onClick={() => setTheme("light")}
                />
            ) : (
                <BiSolidMoon
                    className="text-2xl cursor-pointer"
                    onClick={() => setTheme("dark")}
                />
            )}
        </>
    );
}
